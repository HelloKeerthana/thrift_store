<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$rawInput = file_get_contents("php://input");
file_put_contents("debug_input.txt", $rawInput);
$data = json_decode($rawInput, true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "No data received"]);
    exit;
}

$items = $data['items'] ?? [];

if (empty($items)) {
    echo json_encode(["status" => "error", "message" => "Missing items"]);
    exit;
}

$totalOrderPrice = 0;

foreach ($items as $item) {
    $price = isset($item['price']) ? (float) $item['price'] : 0;
    $quantity = isset($item['quantity']) ? (int) $item['quantity'] : 1;
    $totalOrderPrice += $price * $quantity;
}

if ($totalOrderPrice <= 0) {
    $totalOrderPrice = count($items) * 500;
}

echo json_encode([
    "status" => "success",
    "order_id" => rand(1000, 9999),
    "added" => $totalOrderPrice,
    "message" => "Demo checkout complete (no DB)"
]);
?>
