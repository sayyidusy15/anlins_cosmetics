<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'ProductTab';
    public $timestamps = false;
    protected $guarded = [];
}
