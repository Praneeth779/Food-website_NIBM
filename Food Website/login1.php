<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "resturant"; 


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$email=$_POST['email'];
$password=$_POST['password'];


$sql="SELECT * FROM users WHERE email=? AND password=?";
$stmt=$conn->prepare($sql);
$stmt->bind_param("ss",$email,$password);


$stmt->execute();
$result = $stmt->get_result();


if ($result->num_rows > 0) {
    
    echo "Login successful!";
    header("Location: index.html");
} else {
    
    echo "Invalid username or password.";
}


$stmt->close();
$conn->close();
?>
