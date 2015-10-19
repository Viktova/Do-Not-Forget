<?php

/**

Facebook app:
https://developers.facebook.com/apps/1489571924669594/dashboard/

google app:
https://console.developers.google.com/project/do-not-forget-1039/apiui/credential?clientType#


 */
return array(
	"base_url" => WWWROOT."/auth",
	"providers" => array(

		"Google" => array(
			"enabled" => true,
			"keys" => array("id" => "756457235890-3mea99aadls9fs4epa9r2fp8m13qk9vv.apps.googleusercontent.com", "secret" => "fKW_r1tB_iygkjTYl6ZshUOD")
		),

		// FOR LIVE

		"Facebook" => array(
			"enabled" => true,
			"keys" => array("id" => "1489571924669594", "secret" => "9cd355b06bb00c6a7e7db9856218b4c5"),
			"scope" => "email",
			"trustForwarded" => false
		),

		/*
		// FOR TESTING

		"Facebook" => array(
			"enabled" => true,
			"keys" => array("id" => "1489838384642948", "secret" => "e138c8ad4e30d4c312642136eb6ef226"),
			"scope" => "email",
			"trustForwarded" => true,
			"allowSignedRequest"=>false,
		),
*/

		"Twitter" => array(
			"enabled" => true,
			"keys" => array("key" => "p7kmz7oWf4zb4clBf4yn3lp5T", "secret" => "cjNIdBSHTva0G1uYUndwaQjiSSBjJZFCPrSuGxpeRsjg8QNXZW"),
			"includeEmail" => true
		),

		'GitHub' => array(
			"enabled" => true,
			"keys" => array("key" => "cebdcbbd808c4787615a", "secret" => "c869dd5724db84992ee12c810c189bd512aa3e24"),
		),

	),
	"debug_mode" => true,
	// Path to file writable by the web server. Required if 'debug_mode' is not false
	"debug_file" => "hybridauth-log.txt",
);
