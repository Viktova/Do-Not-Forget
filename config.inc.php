<?php
define('SESSION_TIME', 172800);
error_reporting(E_WARNING | E_ERROR);

ini_set('session.gc_maxlifetime', SESSION_TIME);
session_set_cookie_params(SESSION_TIME);

session_start(); // ready to go!

define('SERVER', 'dev');

switch (SERVER){

case 'dev':
	define('WWWROOT', 'http://do-not-forget-me.dev');
	define('DB_NAME', 'do-not-forget-me');
	define('DB_USER', 'pixeline');
	define('DB_PASSWORD', '5270L');
	define('DB_HOST', 'localhost');
	define('DEBUG', 3);
	break;


default:
	define('WWWROOT', 'http://do-not-forget.me');
	define('DB_NAME', 'do-not-forget-me');
	define('DB_USER', 'donotforgetme');
	define('DB_PASSWORD', 'Q5p2HqJcjaDaLqep');
	define('DB_HOST', 'localhost');
	define('DEBUG', 1);

	break;
}

