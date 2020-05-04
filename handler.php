<?php
include("header.php");

$db = new SysTem\SysDB();

$company_name = array("firmanavn" => $_GET['company']);
$company_address = array("adresse" => $_GET['address']);
$company_post = array("postnr" => $_GET['post']);
$company_city = $_GET['city'];
$company_lat = array("længdegrad" => $_GET['latitude']);
$company_lon = array("breddegrad" => $_GET['longtitude']);

$user_info = array();

array_push($user_info, $company_name, $company_address, $company_post, $company_lat, $company_lon);

$db->insert("firma", $user_info);

//header("location: index.php");

var_dump($user_info);

?>