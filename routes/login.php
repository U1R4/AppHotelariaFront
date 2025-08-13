<?php

    require_once "../config/database.php";
    require_once "../controllers/AuthController.php";
    require_once "../helpers/response.php";

    if ($_SERVER['REQUEST_METHOD'] === "POST") {
        $data = json_decode(file_get_contents('php://input'), true);
        AuthController::login($conn, $data);
    } else {
        jsonResponse([
        "status"=>"erro",
        "message"=>"Metodo não permitido"
        ], 405);
    }

?>