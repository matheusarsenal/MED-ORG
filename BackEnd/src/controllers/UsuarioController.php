<?php
require_once __DIR__ . '/../models/Usuario.php';

function listarUsuarios() {
    header('Content-Type: application/json');
    $usuarios = getTodosUsuarios();
    echo json_encode($usuarios);
}
