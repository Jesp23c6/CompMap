<?php
include("../header.php");

$db = new SysTem\SysDB();

$query = $db->get_results_test("SELECT * FROM `firma` LEFT JOIN post ON firma.postnr = post.postnr");

// while($row = $query->fetch_assoc()){
//     $rowData;
//     $rowData[]['id'] = $row['id'];
//     $rowData[]['lat'] = $row['længdegrad'];
//     $rowData[]['lng'] = $row['breddegrad'];
//     //osv
//     //$result[] = $rowData;
// }

// echo(json_encode($rowData));

var_dump($query);

//header("location: ../index.php");

?>