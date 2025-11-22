<?php

namespace App\Controller;

use App\Model\FondoIndexadoModel;

class FondoIndexadoController
{
    public function guardar() {
        FondoIndexadoModel::saveFI();
    }
}