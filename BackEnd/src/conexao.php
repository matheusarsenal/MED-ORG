<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "med_org";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Checar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
