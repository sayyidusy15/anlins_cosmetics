<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Ingredient;
use App\Models\Slider;
use App\Models\Treatment;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Home', [
            'sliders' => Slider::all(),
            'products' => Product::orderBy('id', 'asc')->get(),
            'ingredients' => Ingredient::all(),
            'treatments' => Treatment::all(),
        ]);
    }
}
