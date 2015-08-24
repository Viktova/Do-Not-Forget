<?php
global $db;
/**
 * Callback for Opauth
 *
 * This file (callback.php) provides an example on how to properly receive auth response of Opauth.
 *
 * Basic steps:
 * 1. Fetch auth response based on callback transport parameter in config.
 * 2. Validate auth response
 * 3. Once auth response is validated, your PHP app should then work on the auth response
 *    (eg. registers or logs user in to your site, save auth data onto database, etc.)
 *
 */
/**
 * Define paths
 */

/**
 * Load config
 */
if (!file_exists(CONF_FILE)) {
	trigger_error('Config file missing at '.CONF_FILE, E_USER_ERROR);
	exit();
}
require CONF_FILE;
/**
 * Instantiate Opauth with the loaded config but not run automatically
 */
require OPAUTH_LIB_DIR.'Opauth.php';

$action = $f3->get('PARAMS.action');

if($action !== 'callback'){
	$Opauth = new Opauth( $config );
} else{
	$Opauth = new Opauth( $config, false);
}

/**
 * Fetch auth response, based on transport configuration for callback
 */
$response = null;
switch($Opauth->env['callback_transport']) {
case 'session':

	$response = $_SESSION['opauth'];
	unset($_SESSION['opauth']);
	break;
case 'post':
	$response = unserialize(base64_decode( $_POST['opauth'] ));
	break;
case 'get':
	$response = unserialize(base64_decode( $_GET['opauth'] ));
	break;
default:
	echo '<strong style="color: red;">Error: </strong>Unsupported callback_transport.'."<br>\n";
	break;
}

/**
 * Check if it's an error callback
 */


if (array_key_exists('error', $response)) {
	echo '<strong style="color: red;">Authentication error: </strong> Opauth returns error auth response.'."<br>\n";
	echo '<pre>'.print_r($response, false).'</pre>';
} else{

	/**
	 * Auth response validation
	 *
	 * To validate that the auth response received is unaltered, especially auth response that
	 * is sent through GET or POST.
	 */

	if (empty($response['auth']) || empty($response['timestamp']) || empty($response['signature']) || empty($response['auth']['provider']) || empty($response['auth']['uid'])) {
		echo '<strong style="color: red;">Invalid auth response: </strong>Missing key auth response components.'."<br>\n";
		echo '<pre>'.print_r($response, false).'</pre>';
	} elseif (!$Opauth->validate(sha1(print_r($response['auth'], true)), $response['timestamp'], $response['signature'], $reason)) {
		echo '<strong style="color: red;">Invalid auth response: </strong>'.$reason.".<br>\n";
		echo '<pre>'.print_r($response, false).'</pre>';

	} else {
		/**
		 * It's all good. Go ahead with your application-specific authentication logic
		 */

		/*
echo '<pre>';

print_r($response);
echo '</pre>';
exit;
//*/
		$_SESSION['logged_in']= 'ok';

		$username = $response['auth']['info']['email'];
		$f3->set('SESSION.logged_in', 'ok');

		$user = new DB\SQL\Mapper($db, 'memos');
		$user->load(array('email = :username LIMIT 0,1', ':username'=>$username));
		if($user->dry()){
			$user->role='subscriber';
			$user->created= date('Y-m-d H:i:s');
			// Send email to alex with the good news: a new user!
			$smtp = new SMTP (  'smtp.gmail.com', 465, 'SSL', 'aplennevaux@gmail.com', 'iluvrocknroll' );

			$smtp->set('From', '"Do Not Forget Server" <aplennevaux@gmail.com>');
			$smtp->set('To', '<aplennevaux@gmail.com>');
			$smtp->set('Subject', 'Yay!, New DNF User !! ');
			$smtp->set('Errors-to', '<aplennevaux@gmail.com>');
			$message = "On ". $user->created .", a new user subscribed to Do Not Forget";
			$message .= "\nname: ".$response['auth']['info']['name'];
			$message .= "\email: ".$response['auth']['info']['email'];
			$sent = $smtp->send($message, TRUE);
			$mylog = $smtp->log();
		}
		$user->email = $username;
		if(!empty($response['auth']['info']['name'])){
			$user->name = $response['auth']['info']['name'];
		}
		if(!empty($response['auth']['info']['first_name'])){
			$user->first = $response['auth']['info']['first_name'];
		}
		if(!empty($response['auth']['info']['image'])){
			$user->image = $response['auth']['info']['image'];
		}
		$user->save();
		$f3->set('SESSION.name',  $user->name);
		$f3->set('SESSION.id',  $user->id);
		$f3->set('SESSION.first',  $user->first);
		$f3->set('SESSION.image',  $user->image);
		$f3->set('SESSION.memo',  $user->memo);
		$f3->set('SESSION.email',  $user->email);
		$f3->set('SESSION.role',  $user->role);
		$f3->set('SESSION.created',  $user->created);
		$f3->set('SESSION.last_modified',  $user->last_modified);
		$f3->set('SESSION.logged_in', 'ok');


		$f3->reroute('/');

	}
}
/**
 * Auth response dump
 */
/*
echo "<pre>";
print_r($response);
echo "</pre>";
*/