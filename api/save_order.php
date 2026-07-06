<?php
$allowedOrigins = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'https://kirabackend.xo.je',
    'https://www.kirabackend.xo.je',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Credentials: true");
}
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$rawInput = file_get_contents("php://input");
file_put_contents("debug_input.txt", $rawInput);

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$data = [];

if (stripos($contentType, 'application/x-www-form-urlencoded') !== false) {
    parse_str($rawInput, $data);
} else {
    $data = json_decode($rawInput, true);
}

if (!$data) {
    echo json_encode(["status" => "error", "message" => "No data received"]);
    exit;
}

$items = [];
if (isset($data['items'])) {
    $items = is_array($data['items']) ? $data['items'] : json_decode($data['items'], true) ?: [];
}

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
