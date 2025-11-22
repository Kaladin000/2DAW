<?php

namespace App\Class;

use ArrayObject;
use DateTime;

class Inversor
{
    protected String $nombre;
    protected String $email;
    protected DateTime $fecha_nac;
    protected String $dni;
    protected array $inversiones;

    public function __construct(String $nombre, String $email, array $inversiones) {
        $this->nombre = $nombre;
        $this->email = $email;
        $this->inversiones = $inversiones;
        $this->fecha_nac = new DateTime();
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): Inversor
    {
        $this->nombre = $nombre;
        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): Inversor
    {
        $this->email = $email;
        return $this;
    }

    public function getFechaNac(): DateTime
    {
        return $this->fecha_nac;
    }

    public function setFechaNac(DateTime $fecha_nac): Inversor
    {
        $this->fecha_nac = $fecha_nac;
        return $this;
    }

    public function getDni(): string
    {
        return $this->dni;
    }

    public function setDni(string $dni): Inversor
    {
        $this->dni = $dni;
        return $this;
    }

    public function getInversiones(): array
    {
        return $this->inversiones;
    }

    public function setInversiones(array $inversiones): Inversor
    {
        $this->inversiones = $inversiones;
        return $this;
    }
}