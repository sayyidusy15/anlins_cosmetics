<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function show(string $slug): Response
    {
        $product = Product::where('slug', $slug)
            ->orWhere('id', is_numeric($slug) ? (int)$slug : 0)
            ->firstOrFail();

        // Get all other products to enable full sliding in "Product Terbaru" section
        $relatedProducts = Product::where('id', '!=', $product->id)->get();

        return Inertia::render('Product/Detail', [
            'product' => $product,
            'relatedProducts' => $relatedProducts,
        ]);
    }
}
