<?php
include("../header.php");

$db = new SysTem\SysDB();

$get_array = array();

$temp_array = array();

foreach($_GET as $key => $value){

    $temp_array = array($key => $value);

    $get_array = $get_array + $temp_array;

}

var_dump($get_array);

//$query = $db->update("firma", $value_array, $where_array);

//header("location: ../index.php");

?>