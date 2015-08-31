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
		
		echo View::instance()->render('layout.htm');
	}
);
$f3->route('POST /update-memo',
	function($f3) {
		global $db;
		// if user EMAIL matches user ID, update its memo
		
		$username = $f3->get('POST.email');
		$id = $f3->get('POST.id');
		$memo = $f3->get('POST.memo');

		$user = new DB\SQL\Mapper($db, 'memos');
		$user->load(array('email = :username AND id= :id LIMIT 0,1', ':username'=>$username, ':id'=> $id ));
		if($user->dry()){
			die("non existing user.");
		}
		$user->memo = $memo;
		$user->last_modified = $f3->get('POST.last_modified');
		$user->save();
		$f3->set('SESSION.memo',   stripslashes($user->memo));
		echo $user->last_modified;
		exit;
		// Send back new remoteLastModified
});

$f3->route('POST /fetch-memo', function($f3){
	global $db;
	$username = $f3->get('POST.email');
	$id = $f3->get('POST.id');
	$user = new DB\SQL\Mapper($db, 'memos');
	$user->load(array('email = :username AND id= :id LIMIT 0,1', ':username'=>$username, ':id'=> $id ));
	if($user->dry()){
		die("non existing user.");
	}
	$f3->set('SESSION.memo',  stripslashes($user->memo));
	echo stripslashes($user->memo);
	exit;
});

$f3->route('GET /logout',
	function($f3) {
		$f3->clear('SESSION');
		$f3->reroute('/');
});

$f3->route('GET @auth: /auth', function($f3){ require 'controllers/auth.php';});
$f3->route('GET @auth_action: /auth/@action/*', function($f3){ require 'controllers/auth-action.get.php';});
$f3->route('GET @auth_action: /auth/@action', function($f3){ require 'controllers/auth-action.get.php';});

$f3->run();
