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

// DB credentials
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'store';
$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "DB connection failed"]);
    exit;
}

$totalOrderPrice = 0;

foreach ($items as $item) {
    $name = $item['name'] ?? '';
    $quantity = 1;

    $productStmt = $conn->prepare("SELECT id, price FROM stock WHERE name = ?");
    $productStmt->bind_param("s", $name);
    $productStmt->execute();
    $productResult = $productStmt->get_result();

    if ($productResult->num_rows === 0) {
        continue;
    }

    $productRow = $productResult->fetch_assoc();
    $productId = $productRow['id'];
    $price = $productRow['price'];
    $totalOrderPrice += $price * $quantity;

    $insertStmt = $conn->prepare("INSERT INTO orders (product_id, quantity) VALUES (?, ?)");
    $insertStmt->bind_param("ii", $productId, $quantity);
    $insertStmt->execute();
    $insertStmt->close();
    $productStmt->close();
}

// Update the simplified sales_total table
$updateStmt = $conn->prepare("UPDATE sales_total SET total = total + ?");
$updateStmt->bind_param("d", $totalOrderPrice);

if ($updateStmt->execute()) {
    echo json_encode(["status" => "success", "added" => $totalOrderPrice]);
} else {
    file_put_contents("debug_error.txt", "Revenue update failed: " . $conn->error);
    echo json_encode(["status" => "error", "message" => "Revenue update failed"]);
}

$updateStmt->close();
$conn->close();
?>
