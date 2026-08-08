<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use Inertia\Inertia;
use Inertia\Response;

class IngredientController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Ingredient/Index', [
            'ingredients' => Ingredient::all(),
        ]);
    }
}
