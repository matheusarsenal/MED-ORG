<?php
// Exemplo simples de roteamento
$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/usuarios':
        require_once __DIR__ . '/../controllers/UsuarioController.php';
        listarUsuarios();
        break;

    default:
        http_response_code(404);
        echo json_encode(['erro' => 'Rota não encontrada']);
        break;
}
