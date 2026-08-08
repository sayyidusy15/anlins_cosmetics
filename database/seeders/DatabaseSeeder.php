<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Product;
use App\Models\Ingredient;
use App\Models\Slider;
use App\Models\Treatment;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Truncate existing tables to avoid duplicate entries
        DB::statement('TRUNCATE TABLE sliders RESTART IDENTITY CASCADE;');
        DB::statement('TRUNCATE TABLE products RESTART IDENTITY CASCADE;');
        DB::statement('TRUNCATE TABLE ingredients RESTART IDENTITY CASCADE;');
        DB::statement('TRUNCATE TABLE treatments RESTART IDENTITY CASCADE;');

        // 1. Sliders
        Slider::create([
            'title' => 'Anlins Glowing Skin Solution',
            'subtitle' => 'Premium Cosmetics & Beauty Care',
            'description' => 'Formulasi terbaik untuk kulit sehat, bercahaya, dan bernutrisi alami setiap hari.',
            'imageUrl' => '/images/slider/SliderTwo/1.png',
            'direction' => 'Beli Sekarang'
        ]);

        Slider::create([
            'title' => 'Sentuhan Nutrisi Alami Kulit',
            'subtitle' => 'Natural Skincare Formula',
            'description' => 'Bahan organik pilihan yang merawat kelembapan dan meremajakan sel kulit wajah.',
            'imageUrl' => '/images/slider/SliderTwo/2.png',
            'direction' => 'Lihat Katalog'
        ]);

        Slider::create([
            'title' => 'Perawatan Klinik Kecantikan',
            'subtitle' => 'Exclusive Beauty Treatment',
            'description' => 'Terapi wajah intensif dari tenaga ahli kecantikan profesional Anlins Beauty.',
            'imageUrl' => '/images/slider/SliderTwo/3.png',
            'direction' => 'Reservasi Treatment'
        ]);

        // 2. Products
        Product::create([
            'name' => 'Anlins Brightening Serum',
            'description' => 'Serum pencerah wajah murni dengan konsentrat Niacinamide & Vitamin C.',
            'price' => 175000,
            'category' => 'Serum',
            'imageUrl' => '/images/product/1.png',
            'rating' => 4.9,
            'slug' => 'anlins-brightening-serum'
        ]);

        Product::create([
            'name' => 'Anlins Gentle Facial Wash',
            'description' => 'Pembersih wajah lembut tanpa busa berlebih, menjaga kelembapan kulit.',
            'price' => 95000,
            'category' => 'Cleanser',
            'imageUrl' => '/images/product/2.png',
            'rating' => 4.8,
            'slug' => 'anlins-gentle-facial-wash'
        ]);

        Product::create([
            'name' => 'Anlins Hydrating Day Cream',
            'description' => 'Krim siang dengan SPF 30++ melindungi kulit dari sinar UV & polusi.',
            'price' => 145000,
            'category' => 'Moisturizer',
            'imageUrl' => '/images/product/3.png',
            'rating' => 5.0,
            'slug' => 'anlins-hydrating-day-cream'
        ]);

        Product::create([
            'name' => 'Anlins Rosehip Miracle Oil',
            'description' => 'Minyak ekstrak mawar alami penutrisi kulit kering dan menyamarkan noda hitam.',
            'price' => 210000,
            'category' => 'Face Oil',
            'imageUrl' => '/images/product/4.png',
            'rating' => 4.9,
            'slug' => 'anlins-rosehip-miracle-oil'
        ]);

        // 3. Ingredients
        Ingredient::create([
            'name' => 'Centella Asiatica',
            'description' => 'Menenangkan kemerahan dan mempercepat penyembuhan iritasi kulit.',
            'imageUrl' => '/images/benefits/1.png'
        ]);

        Ingredient::create([
            'name' => 'Hyaluronic Acid 3D',
            'description' => 'Menjaga hidrasi kulit hingga lapisan terdalam selama 24 jam.',
            'imageUrl' => '/images/benefits/2.png'
        ]);

        Ingredient::create([
            'name' => 'Rosehip Seed Essence',
            'description' => 'Kaya akan antioksidan dan vitamin A untuk meremajakan sel kulit.',
            'imageUrl' => '/images/benefits/3.png'
        ]);

        // 4. Treatments
        Treatment::create([
            'name' => 'Glow & Radiant Facial',
            'description' => 'Perawatan eksfoliasi halus & terapi nutrisi serum murni untuk wajah tampak bercahaya seketika.',
            'menu' => ['Cleanse & Steam', 'Microdermabrasion', 'Glowing Mask', 'Serum Infusion'],
            'benefit' => ['Mencerahkan kulit kusam', 'Mengecilkan pori-pori', 'Merangsang kolagen'],
            'imageUrl' => '/images/introduction/IntroductionThree/img-1.png',
            'btn' => 'Reservasi Perawatan'
        ]);

        Treatment::create([
            'name' => 'Deep Cleansing & Acne Care',
            'description' => 'Terapi pembersihan pori-pori mendalam dan perawatan anti-bakteri untuk kulit berjerawat.',
            'menu' => ['Deep Extraction', 'Blue Light Therapy', 'Acne Mask', 'Calming Essence'],
            'benefit' => ['Mengurangi jerawat aktif', 'Mengontrol minyak berlebih', 'Meredakan peradangan'],
            'imageUrl' => '/images/introduction/IntroductionThree/img-2.png',
            'btn' => 'Konsultasi Perawatan'
        ]);
    }
}
