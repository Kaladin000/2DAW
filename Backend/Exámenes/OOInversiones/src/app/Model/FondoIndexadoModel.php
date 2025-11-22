<?php

namespace App\Model;

use PDO;

class FondoIndexadoModel
{
    /*
        Recojo la conexión y el POST, preparo la sentencia sql con los parámetros a asignar
        y finalmente asigno los parámetros mediante el POST que he recogido, ejecuto la sentencia.
        Crea un nuevo valor en la tabla Fondo Indexado satisfactoriamente.
    */
    public static function saveFI() {
        $conexion = new PDO("mysql:host=mariadb;dbname=examen", "alumno", "alumno");
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $fondoIndexado = $_POST;
        $sql = "insert into fondoindexado (nombre, pais, gastos) values (:nombre, :pais, :gastos)";
        $sentenciaPreparada = $conexion->prepare($sql);
        $sentenciaPreparada->bindParam(":nombre", $fondoIndexado["nombre"]);
        $sentenciaPreparada->bindParam(":pais", $fondoIndexado["pais"]);
        $sentenciaPreparada->bindParam(":gastos", $fondoIndexado["gastos"]);
        $sentenciaPreparada->execute();
    }

}