<?php

namespace App\Controller;

use App\Model\InversorModel;

class InversorController
{
    public function destroy($id) {
        InversorModel::DeleteInversor($id);
    }
}