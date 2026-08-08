import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Slider, { SliderItem } from "@/Components/Slider";
import ProductTab, { Product } from "@/Components/ProductTab";
import Treatment, { TreatmentItem } from "@/Components/Treatment";
import Ingredients, { IngredientItem } from "@/Components/Ingredients";
import NavbarMobile from "@/Components/NavbarMobile";
import PageLoadingIndicator from "@/Components/Skeletons/PageLoadingIndicator";

interface HomeProps {
  sliders: SliderItem[];
  products: Product[];
  treatments: TreatmentItem[];
  ingredients: IngredientItem[];
}

export default function Home({
  sliders,
  products,
  treatments,
  ingredients,
}: HomeProps) {
  return (
    <>
      <Head title="Anlins Cosmetics - Premium Beauty & Skincare" />
      <PageLoadingIndicator />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar products={products} />
        <main className="flex-grow">
          <div id="content">
            <Slider data={sliders} />
            <div id="products">
              <ProductTab data={products} />
            </div>
            <div id="treatment">
              <Treatment data={treatments} />
            </div>
            <div id="ingredients">
              <Ingredients data={ingredients} />
            </div>
            <NavbarMobile />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
