<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$user_id = $data->user_id;
$product_id = $data->product_id;
$quantity = $data->quantity;

$stmt = $conn->prepare("INSERT INTO orders (user_id, product_id, quantity) VALUES (?, ?, ?)");
$stmt->bind_param("iii", $user_id, $product_id, $quantity);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo json_encode(["status" => "Order Placed"]);
} else {
    echo json_encode(["status" => "Failed"]);
}
?>
