<?php
include("../header.php");

$db = new SysTem\SysDB();

$where_array = array("firmanavn" => $_GET['firmanavn'], "adresse" => $_GET['adresse']);

$db->delete("firma", $where_array);

//header("location: ../index.php");

?>