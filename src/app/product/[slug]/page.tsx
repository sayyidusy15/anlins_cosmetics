"use client";

// CSS FAMILY
import "@/styles/style.css";
import "@/styles/bootstrap-drawer.min.css";
import "@/styles/bootstrap.css";
import "@/styles/drawer.min.css";
import "@/styles/jquery.modal.min.css";
import "@/styles/slick.min.css";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import ProductDetailSkeleton from "@/components/layouts/ProductDetailSkeleton";
import ProductActions from "@/components/elements/ProductDetailActions";
// import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  rating: number;
  slug: string;
};

export default function ProductDetail() {
  // const { id } = params; // Ini adalah parameter 'id' dari URL
  const params = useParams(); // Ambil params dari URL
  const slug = params?.slug; // Ambil slug dari URL

   // Cek slug di console
   useEffect(() => {
    console.log("Slug received:", slug);
  }, [slug]);


  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (slug) {
      // Fetch data produk berdasarkan slug
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/productTab/${slug}`);
          const data: Product = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Failed to fetch product:', error);
        }
      };

      fetchProduct();
    }
  }, [slug]);

  if (!product) return <ProductDetailSkeleton />;

  return (
    <div id="content">
      <div className="breadcrumb">
        <div className="container">
          <h2>Shop</h2>
        </div>
      </div>
      <div className="shop">
        <div className="container">
          <div className="product-detail__wrapper">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="product-detail__slide-two">
                  <div className="product-detail__slide-two__big">
                    <div className="slider__item">
                      <Image
                        src="/images/product/1.png"
                        alt="Product image"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="product-detail__content">
                  <div className="product-detail__content">
                    <div className="product-detail__content__header">
                      <h5>{product.category}</h5>
                      <h2>{product.name}</h2>
                    </div>
               
                    <h3 className="text-xl font-semibold">Rp {product.price?.toLocaleString() || 'N/A'}</h3>

                    <div className="divider"></div>
                    <div className="product-detail__content__footer">
                      <ul>
                        <li>Brand:gucci</li>
                        <li>Product code: PM 01</li>
                        <li>Reward point: 30</li>
                        <li>Availability: In Stock</li>
                      </ul>
                      {/* action */}
                      <ProductActions product={product} />
                      {/* <div className="product-detail__controller">
                        <div className="quantity-controller -border -round">
                          <div className="quantity-controller__btn -descrease">
                            -
                          </div>
                          <div className="quantity-controller__number">2</div>
                          <div className="quantity-controller__btn -increase">
                            +
                          </div>
                        </div>
                        <div className="add-to-cart -dark">
                          <a className="btn -round bg-green-600 text-white" href="#">
                            <FontAwesomeIcon className="text-xl  mt-[6px]" icon={faWhatsapp} />
                          </a>
                          <h5>Beli Sekarang</h5>
                        </div>
                        <div className="product-detail__controler__actions"></div>
                      </div> */}

                      <div className="divider"></div>
                      <div className="product-detail__content__tab">
                        <ul className="tab-content__header">
                          <li className="tab-switcher" data-tab-index="0">
                            Description
                          </li>
                        </ul>
                        <div id="allTabsContainer">
                          <div
                            className="tab-content__item -description"
                            data-tab-index="0"
                          >
                            <p>
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
