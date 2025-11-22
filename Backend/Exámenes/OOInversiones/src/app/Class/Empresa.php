<?php

namespace App\Class;

class Empresa
{
    protected String $id;
    protected String $nombre;
    protected float $rentabilidad;

    public function __construct(String $id, String $nombre, float $rentabilidad) {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->rentabilidad = $rentabilidad;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function setId(string $id): Empresa
    {
        $this->id = $id;
        return $this;
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): Empresa
    {
        $this->nombre = $nombre;
        return $this;
    }

    public function getRentabilidad(): float
    {
        return $this->rentabilidad;
    }

    public function setRentabilidad(float $rentabilidad): Empresa
    {
        $this->rentabilidad = $rentabilidad;
        return $this;
    }
}