<?php

namespace App\Model;

use App\Class\Empresa;
use PDO;

class EmpresaModel
{
    /*
        Recojo la conexión de mi base de datos, creo la sentencia sql y le asigno el parámetro
        id al valor $id que viene con el parámetro de la función, ejecuto la sentencia y
        finalmente devuelvo la empresa.
        Devuelve la Empresa con $id del parámetro de la función.
    */
    public function getEmpresaById($id) : Empresa {
        $conexion = new PDO("mysql:host=mariadb;dbname=examen", "alumno", "alumno");
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "SELECT * FROM empresa WHERE id = :id";
        $sentenciaPreparada = $conexion->prepare($sql);
        $sentenciaPreparada->bindParam(':id', $id, PDO::PARAM_INT);
        $sentenciaPreparada->execute();

        return $sentenciaPreparada->fetch();
    }
}