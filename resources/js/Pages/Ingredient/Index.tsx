import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import PageLoadingIndicator from "@/Components/Skeletons/PageLoadingIndicator";

export type IngredientItem = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

interface IngredientIndexProps {
  ingredients: IngredientItem[];
}

export default function IngredientIndex({ ingredients }: IngredientIndexProps) {
  return (
    <>
      <Head title="Kenali Bahan Produk Kami - Anlins Cosmetics" />
      <PageLoadingIndicator />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="text-sm text-slate-500 mb-6">
              <Link href="/" className="hover:text-rose-500">Beranda</Link> / <span className="text-slate-800 font-semibold">Bahan Alami</span>
            </div>

            <div className="text-center max-w-2xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Kenali Bahan Produk Kami
              </h1>
              <p className="text-slate-600 leading-relaxed">
                Kami memilih bahan alami dan bahan aktif berkualitas tinggi untuk memastikan nutrisi dan kebaikan terbaik bagi kulit Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 mb-6 flex items-center justify-center bg-rose-50 rounded-full p-4">
                    <img
                      src={ingredient.imageUrl}
                      alt={ingredient.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {ingredient.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {ingredient.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
