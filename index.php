<?php
require 'config.inc.php';
// Kickstart the framework
$f3=require('lib/base.php');

$f3->set('DEBUG', DEBUG);
if ((float)PCRE_VERSION<7.9)
	trigger_error('PCRE version is out of date');

// Load configuration
$f3->config('config.ini');


/* OPAUTH */
define('OPAUTH_LIB_DIR', dirname(__FILE__).'/controllers/opauth/');
define('CONF_FILE', dirname(__FILE__).'/controllers/opauth/opauth.conf.php');


$db=new DB\SQL(
	'mysql:host='.DB_HOST.';port=3306;dbname='.DB_NAME,
	DB_USER,
	DB_PASSWORD
);

/**********************************************

	ROUTES

**********************************************/


$f3->route('GET /',
	function($f3) {
		if(empty($f3->get('SESSION.first'))){
			$f3->set('SESSION.first', "sweet child o' mine");
		}

		$f3->set('user', $f3->get('SESSION'));
		$f3->set('content', 'home.htm');
		$f3->set('menu_active', 'home');
		
		echo View::instance()->render('layout.htm');
	}
);

$f3->route('POST /synchronise-memo',
	function($f3) {
		global $db;
		// if user EMAIL matches user ID, update its memo
		
		$username = $f3->get('POST.email');
		$id = $f3->get('POST.id');
		$memo = $f3->get('POST.memo');
		$lastModified = $f3->get('POST.last_modified');
		if(empty($username)){
			die("no user email sent.");
		}
		$user = new DB\SQL\Mapper($db, 'memos');
		$user->load(array('email = :username AND id= :id LIMIT 0,1', ':username'=>$username, ':id'=> $id ));
		if($user->dry()){
			die("non existing user.");
		}
		if($user->last_modified <= $lastModified){
			// Save Data
			$memo = str_replace(array("\n", "\r","\t"), '', $memo);
			$user->memo = json_encode($memo);
			$user->last_modified = $lastModified;
			$user->save();
			$result = array('last_modified'=> $user->last_modified);
			$f3->set('SESSION.memo',   stripslashes($user->memo));
		} else{
			// Send Data
			$result = array('memo'=>$user->memo, 'last_modified'=> $user->last_modified);
		}
		echo json_encode($result);
		exit;
});

$f3->route('POST /scrape-url',function($f3){
	$url = $f3->get('POST.url');
	require 'classes/SimpleScraper.class.php';
	$url = isset($url) ? $url : '';
        try {
            $scraper = new SimpleScraper($url);
            $data = $scraper->getAllData();
            $response = array(
                'success' => true,
                'ogp' => $data['ogp'],
                'dump' => print_r($data, true)
            );
        } catch (Exception $e) {
            $response = array(
                'success' => false,
                'message' => 'Something went wrong.',
                'log' => "$e"
            );
        }
        echo json_encode($response);
});

$f3->route('GET /tips',
	function($f3) {
		if(empty($f3->get('SESSION.first'))){
			$f3->set('SESSION.first', "sweet child o' mine");
		}
		$f3->set('user', $f3->get('SESSION'));
		$f3->set('content', 'tips.htm');
		$f3->set('menu_active', 'tips');
		echo View::instance()->render('layout.htm');
	}
);

$f3->route('GET /about',
	function($f3) {
		if(empty($f3->get('SESSION.first'))){
			$f3->set('SESSION.first', "sweet child o' mine");
		}
		$f3->set('user', $f3->get('SESSION'));
		$f3->set('content', 'about.htm');
		$f3->set('menu_active', 'about');
		echo View::instance()->render('layout.htm');
	}
);

$f3->route('GET /logout',
	function($f3) {
		$f3->clear('SESSION');
		$f3->reroute('/');
});

$f3->route('GET @auth: /auth', function($f3){ require 'controllers/auth.php';});
$f3->route('GET @auth_action: /auth/@action/*', function($f3){ require 'controllers/auth-action.get.php';});
$f3->route('GET @auth_action: /auth/@action', function($f3){ require 'controllers/auth-action.get.php';});

$f3->run();
