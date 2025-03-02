<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "resturant"; 


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$fname = $_POST['firstname'];
$sname = $_POST['secondname'];
$email = $_POST['email'];
$password = $_POST['password'];
$address = $_POST['address'];
$gender = $_POST['gender'];





$stmt = $conn->prepare("INSERT INTO users(fname,sname,email,password,address,gender) VALUES (?,?,?,?,?,?)");
$stmt->bind_param("ssssss",$fname,$sname,$email,$password,$address,$gender);

if ($stmt->execute()) {
    echo "Registration successful!";
    header("Location: index.html#login");
exit();

} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
