<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$stock = [
    ["id" => 1, "name" => "Shirt", "price" => 500, "quantity" => 10],
    ["id" => 2, "name" => "Jeans", "price" => 1200, "quantity" => 5],
    ["id" => 3, "name" => "Shoes", "price" => 2000, "quantity" => 3]
];

echo json_encode($stock);
?>
