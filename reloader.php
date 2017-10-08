<?php

$exploded = explode(',', $_SERVER['QUERY_STRING']);

$filename_list = array();

foreach ($exploded as $file) {
	$file = urldecode($file);
	$file = rtrim($file,":");
	if (strpos($file, '*.') !== false) {
    $tempName = explode ('*.', $file);
		$extSearch = glob($tempName[0].'*.{'.$tempName[1].'}', GLOB_BRACE);

		$filename_lists[] = $extSearch[0];
	} else {
		$filename_lists[] = $file;
	}

}


$files = array();

foreach ( $filename_lists as $file ) {

	$files[] = filemtime($file);

}


header('Last-Modified: '. date('r', @max($files)));
?>
