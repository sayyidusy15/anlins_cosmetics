<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Treatment extends Model
{
    protected $table = 'Treatment';
    public $timestamps = false;
    protected $guarded = [];

    protected $casts = [
        'menu' => 'array',
        'benefit' => 'array',
    ];
}
