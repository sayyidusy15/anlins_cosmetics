import { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ProductDetailSlider from "@/Components/ProductDetailSlider";
import PageLoadingIndicator from "@/Components/Skeletons/PageLoadingIndicator";
import ProductDetailSkeleton from "@/Components/Skeletons/ProductDetailSkeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Product } from "@/Components/ProductTab";

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetail({
  product,
  relatedProducts,
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const whatsappNumber = "+6285793869960";

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <ProductDetailSkeleton />
        </main>
        <Footer />
      </div>
    );
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const totalPrice = product.price * quantity;

  const handleWhatsAppClick = () => {
    const message = `Halo kak, saya mau order ${
      product.name
    } dengan jumlah ${quantity} pcs. Total harga: Rp ${(
      product.price * quantity
    ).toLocaleString('id-ID')}. Mohon dibantu proses pesanannya ya. Terima kasih!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Head title={`${product.name} - Anlins Cosmetics`} />
      <PageLoadingIndicator />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow py-10">
          <div className="container mx-auto px-4">
            <div className="text-sm text-slate-500 mb-6">
              <Link href="/" className="hover:text-rose-500">Beranda</Link> / <span className="text-slate-800 font-semibold">{product.name}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-12">
              {/* Product Image */}
              <div className="flex justify-center items-center bg-slate-50 p-6 rounded-xl">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="max-h-[450px] w-auto object-contain rounded-lg shadow-sm"
                />
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block bg-rose-50 text-rose-600 font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    {product.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                    {product.name}
                  </h1>
                </div>

                <div className="text-2xl font-bold text-rose-600">
                  Rp {Number(product.price).toLocaleString("id-ID")}
                </div>

                <div className="border-t border-b border-slate-100 py-4">
                  <h3 className="font-semibold text-slate-800 mb-2">Deskripsi Produk</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {product.description}
                  </p>
                </div>

                {/* Quantity & Order Section */}
                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl">
                    <div>
                      <p className="text-xs text-slate-500">Harga Satuan:</p>
                      <p className="font-semibold text-slate-800">
                        Rp {Number(product.price).toLocaleString("id-ID")}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">Total Harga:</p>
                      <p className="font-bold text-lg text-rose-600">
                        Rp {Number(totalPrice).toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                      <button
                        className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors font-bold text-lg"
                        onClick={handleDecrease}
                      >
                        -
                      </button>
                      <span className="w-12 text-center font-semibold text-slate-800">
                        {quantity}
                      </span>
                      <button
                        className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors font-bold text-lg"
                        onClick={handleIncrease}
                      >
                        +
                      </button>
                    </div>

                    {/* Order via WhatsApp */}
                    <button
                      onClick={handleWhatsAppClick}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-md hover:shadow-lg"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                      <span>Pesan via WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Terbaru Slider Section */}
            <ProductDetailSlider data={relatedProducts} />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
