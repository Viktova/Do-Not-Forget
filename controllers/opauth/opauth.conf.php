<?php
/**
 * Opauth basic configuration file to quickly get you started
 * ==========================================================
 * To use: rename to opauth.conf.php and tweak as you like
 * If you require advanced configuration options, refer to opauth.conf.php.advanced
 */

$config = array(
/**
 * Path where Opauth is accessed.
 *  - Begins and ends with /
 *  - eg. if Opauth is reached via http://example.org/auth/, path is '/auth/'
 *  - if Opauth is reached via http://auth.example.org/, path is '/'
 */
	'path' => '/auth/',

/**
 * Callback URL: redirected to after authentication, successful or otherwise
 */
	'callback_url' => '{path}callback',
	'redirect_uri'=> '/',
	'callback_transport' => 'session',
	
/**
 * A random string used for signing of $auth response.
 * 
 * NOTE: PLEASE CHANGE THIS INTO SOME OTHER RANDOM STRING
 */
	'security_salt' => 'LDFmiilYf8Fyw5W1blabla0DSFLMSKJFDSF9234304W1KsVrieQCnpBzzpTBWA5vJidQKDx8pMJbmw28R1C4m',
/**

Facebook app:
https://developers.facebook.com/apps/1489571924669594/dashboard/

google app:
https://console.developers.google.com/project/do-not-forget-1039/apiui/credential?clientType#


 */
	'Strategy' => array(
		// Define strategies and their respective configs here
		
		'Facebook' => array(
			'app_id' => '1489571924669594',
			'app_secret' => '9cd355b06bb00c6a7e7db9856218b4c5',
			'scope'=>'email'
		),
		'Facebook-test' => array(
			// TEST FB APP
			'app_id' => '1489838384642948',
			'app_secret' => 'e138c8ad4e30d4c312642136eb6ef226',
			'strategy_class' => 'Facebook',
			'strategy_url_name' => 'facebook-test',
			'scope'=>'email'
		),	

		'Google' => array(
			'client_id' => '756457235890-3mea99aadls9fs4epa9r2fp8m13qk9vv.apps.googleusercontent.com',
			'client_secret' => 'fKW_r1tB_iygkjTYl6ZshUOD',
			'scope' => 'email'
		),
		
		'GitHub' => array(
			'client_id' => 'cebdcbbd808c4787615a',
			'client_secret' => 'c869dd5724db84992ee12c810c189bd512aa3e24',
			'scope'=>'user'
		),				
	),
);