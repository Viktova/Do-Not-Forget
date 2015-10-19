<?php
global $db;

$hauth_config = dirname(__FILE__) .'/hybridauth/config.php';
require( dirname(__FILE__) . '/hybridauth/Hybrid/Auth.php');

$provider_name = $f3->get('PARAMS.action');

if(empty($provider_name)){
	die("no provider");
}

// then grab the user profile
try{
	$hybridauth = new Hybrid_Auth( $hauth_config );
	$adapter = $hybridauth->authenticate( $provider_name );
	$user_profile = $adapter->getUserProfile();
	$_SESSION['logged_in']= 'ok';

	$username = $user_profile->email;
	$f3->set('SESSION.logged_in', 'ok');

	$user = new DB\SQL\Mapper($db, 'memos');
	$user->load(array('email = :username LIMIT 0,1', ':username'=>$username));
	if($user->dry()){

		$user->role='subscriber';
		$user->created= date('Y-m-d H:i:s');

		// Send email to Admin with the good news: a new user!
		$smtp = new SMTP (  SMTP_SERVER, SMTP_PORT, SMTP_PROTOCOL, SMTP_USERNAME, SMTP_PASSWORD );
		$smtp->set('From', '"Do Not Forget Me" <'.ADMIN_EMAIL.'>');
		$smtp->set('To', '<'.ADMIN_EMAIL.'>');
		$smtp->set('Subject', 'Yay, New DNFM User : '.$user_profile->displayName);
		$smtp->set('Errors-to', '<'.ADMIN_EMAIL.'>');

		$message = "On ". date('Y-m-d at H:i') .", a new user subscribed to Do Not Forget Me!";
		$message .= "\n\nname: ".$user_profile->displayName;
		$message .= "\nemail: ".$user_profile->email;
		$message .= "\n\n\nPop up the champaign!";

		$sent = $smtp->send($message, TRUE);
		$mylog = $smtp->log();
	}
	$user->email = $username;
	if(!empty($user_profile->displayName)){
		$user->name = $user_profile->displayName;
	}
	if(!empty($user_profile->firstName)){
		$user->first = $user_profile->firstName;
	}
	if(!empty($user_profile->photoURL)){
		$user->image = $user_profile->photoURL;
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

} catch( Exception $e ){
	echo "Argl! we got an error: " . $e->getMessage();
	echo " Error code: " . $e->getCode();
}
