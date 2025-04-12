<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include 'db.php';

$sql = "SELECT * FROM stock";
$result = $conn->query($sql);

$stock = [];
while($row = $result->fetch_assoc()) {
    $stock[] = $row;
}

echo json_encode($stock);
?>
