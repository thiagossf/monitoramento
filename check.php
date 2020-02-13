<?php

	$online  = '<div class="online"><img src="./img/online.png" /></div>';
	$offline = '<div class="offline"><img src="./img/offline.png" /></div>';

	$ip   =	$_GET['ip'];
	$tipo = $_GET['tp'];

	$ip2 =gethostbyname($ip);

/*
	exec('ping -n 1 ' . $ip2, $saida, $retorno);

	if($retorno == 0){
		echo $online;
	}else{
		echo $offline;
	}
*/
	$check = @fsockopen($ip2, $tipo, $errno, $errstr, 1);

	if(!$check){
		echo $offline;
	}else{
		echo $online;
		if($check){
			@fclose($x);
		}
	}
?>