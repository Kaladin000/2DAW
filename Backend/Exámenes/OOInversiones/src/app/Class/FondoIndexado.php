<?php

namespace App\Class;

use Exception;

class FondoIndexado
{
    protected String $nombre;
    protected String $pais;
    protected float $gastos;
    protected array $empresas;
    public function __construct(String $nombre, String $pais, float $gastos, array $empresas) {
        $this->nombre = $nombre;
        $this->pais = $pais;
        $this->gastos = $gastos;
        $this->empresas = $empresas;
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): FondoIndexado
    {
        $this->nombre = $nombre;
        return $this;
    }

    public function getPais(): string
    {
        return $this->pais;
    }

    public function setPais(string $pais): FondoIndexado
    {
        $this->pais = $pais;
        return $this;
    }

    public function getGastos(): float
    {
        return $this->gastos;
    }

    public function setGastos(float $gastos): FondoIndexado
    {
        $this->gastos = $gastos;
        return $this;
    }

    public function getEmpresas(): array
    {
        return $this->empresas;
    }

    public function setEmpresas(array $empresas): FondoIndexado
    {
        $this->empresas = $empresas;
        return $this;
    }

    // Si existe la empresa, se añade al array propio $empresas como últimu valor (array push)
    public function addEmpresa(Empresa $empresa): bool {
        try {
            array_push($this->empresas, $empresa);
            return true;
        } catch(Exception $e) {
            return false;
        }
    }

    /* Inicializo una rentabilidad total y una cantidad de empresas, dentro de un for each
       sumo las rentabilidades de todas las empresas de una en una sumándolas al valor rentabilidadTotal.
       En cada instancia del foreach agrego una unidad al int cantidadEmpresas.
       Saco la rentabilidad media que será el total de la rentabilidad entre la cantidad de empresas.
       Devuelvo el número float. */
    public function calcularRentabilidadMedia() : float {
        $rentabilidadTotal = 0;
        $cantidadEmpresas = 0;
        foreach ($this->empresas as $empresa) {
            $rentabilidadTotal += $empresa->getRentabilidad();
            $cantidadEmpresas++;
        }
        $rentabilidadMedia = $rentabilidadTotal / $cantidadEmpresas;
        return $rentabilidadMedia;
    }
}