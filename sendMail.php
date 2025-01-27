<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ensure PHPMailer is included

header('Content-Type: application/json'); // Set header for JSON response

// Get JSON data from the request
$data = json_decode(file_get_contents('php://input'), true);

// Validate input
if (!isset($data['name'], $data['email'], $data['message'])) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid input.']);
    exit;
}

$name = htmlspecialchars($data['name']);
$email = htmlspecialchars($data['email']);
$message = htmlspecialchars($data['message']);

// Create a new PHPMailer instance
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Set the SMTP server to send through
    $mail->SMTPAuth = true;
    $mail->Username = 'techvaultguc@gmail.com'; // Your email
    $mail->Password = 'TECH@vault@gmail.com'; // Your email password (consider using environment variables)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587; // TCP port to connect to

    // Recipients
    $mail->setFrom('techvaultguc@gmail.com', 'Contact Form');
    $mail->addAddress('ashutosh242654@gmail.com'); // Add a recipient

    // Content
    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = 'New message from contact form';
    $mail->Body    = "Name: $name<br>Email: $email<br>Message: $message";

    $mail->send();
    echo json_encode(['message' => 'Message sent successfully!']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
}
?>
