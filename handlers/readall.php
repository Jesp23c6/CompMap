<?php
include("../header.php");

$db = new SysTem\SysDB();

$query = $db->get_results("SELECT * FROM `firma` LEFT JOIN post ON firma.postnr = post.postnr");

$result = array();
/*
while($row = $query->fetch_assoc()){
    $result[] = $row;
}

print(json_encode($result));
*/

var_dump($query);

//header("location: ../index.php");

?>