<?php
include("../header.php");

$db = new SysTem\SysDB();

$query = $db->get_results("SELECT * FROM `firma` LEFT JOIN post ON firma.postnr = post.postnr");

while($row = $query->fetch_assoc()){
    $rowData = new stdClass();
    $rowData->id = $row['id'];
    $rowData->lat = $row['længdegrad'];
    $rowData->lng = $row['breddegrad'];
    //osv
    $result[] = $rowData;
 }

print(json_encode($result));

//var_dump($query);

//header("location: ../index.php");

?>