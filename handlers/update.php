<?php
include("../header.php");

$db = new SysTem\SysDB();

$get_array = array();

$where_array = array();

$temp_array = array();

foreach($_GET as $key => $value){

    if($key == 'id'){

        $temp_array = array($key => $value);

        $where_array = $where_array + $temp_array;

    }

    else{

        $temp_array = array($key => $value);

        $get_array = $get_array + $temp_array;

    }

}

//var_dump($get_array, $where_array);

$query = $db->update("firma", $get_array, $where_array);

//header("location: ../index.php");

?>