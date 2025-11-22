<?php

namespace App\Model;

use PDO;

class InversorModel
{
    /*
        Recojo la conexión con mi base de datos, preparo la sentencia y le asigno
        el parámetro identificativo, el email, a el parámetro $id que me viene con la función
        finalmente ejecuto la sentencia y borra de la base de datos el inversor con ese id (email)
    */
    public static function DeleteInversor($id) {
        $conexion = new PDO("mysql:host=mariadb;dbname=examen", "alumno", "alumno");
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "DELETE FROM inversor WHERE email = :email";
        $sentenciaPreparada = $conexion->prepare($sql);
        $sentenciaPreparada->bindParam(':email', $id);
        $sentenciaPreparada->execute();
    }
}