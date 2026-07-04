<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$response = [
    "status" => "Order Placed",
    "order_id" => rand(1000, 9999),
    "message" => "This is a demo response without a database"
];

if (is_array($data) && isset($data["items"])) {
    $response["items_received"] = count($data["items"]);
}

echo json_encode($response);
?>
