"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faShoppingBag,
  faEye,
  faHeart,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductSkeleton from "@/components/elements/skeleton/ProductTabSkeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

interface StarRatingProps {
  rating: number;
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="rate">
      {[...Array(5)].map((_, index) => {
        if (index + 1 <= Math.floor(rating)) {
          return (
            <FontAwesomeIcon
              icon={faStar}
              key={index}
              className="text-yellow-500"
            />
          );
        } else if (index < rating) {
          return (
            <FontAwesomeIcon
              icon={faStarHalfStroke}
              key={index}
              className="text-yellow-500"
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default function ProductDetailSlider() {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  //base url
  // const BASE_IMAGE_URL = "https://iralj7kgpu64pokh.public.blob.vercel-storage.com/productImage/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/productTab");
        if (!response.ok) {
          console.error("Failed to fetch products:", response.statusText);
          return;
        }
        const data: Product[] = await response.json();
        setData(data.sort((a, b) => a.id - b.id));
        setData(data);
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unexpected error occurred"));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <ProductSkeleton />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="product-tab -style-2 relative">
      <div className="container">
        <div className="product-tab__header">
          <h5>Product Terbaru</h5>
          {/* <div className="product-tab-slide__header__controller">
            <Link href="/shop" className="btn -white">
              View all
            </Link>
          </div> */}
        </div>

        <div className="product-tab__content relative">
          {/* Custom Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg transform transition-transform hover:scale-110 focus:outline-none group"
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-gray-600 group-hover:text-gray-800 transition-colors"
            />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg transform transition-transform hover:scale-110 focus:outline-none group"
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-gray-600 group-hover:text-gray-800 transition-colors"
            />
          </button>

          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            loop={true}
            slidesPerView={4}
            speed={800}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="product-slider px-4"
          >
            {data.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="product">
                  <div className="product-thumb">
                    <Link
                      className="product-thumb__image"
                      href={`/product/${product.slug}`}
                    >
                      {/* gambar setelah di hover */}
                      <Image
                        // src={`${BASE_IMAGE_URL}${product.imageUrl}`}
                        src={product.imageUrl}
                        alt="Product image"
                        width={500}
                        height={500}
                      />
                      {/* gambar sebelum di hover */}
                      <Image
                        // src={`${BASE_IMAGE_URL}${product.imageUrl}`}
                        src={product.imageUrl}
                        alt="Product image"
                        width={500}
                        height={500}
                      />
                    </Link>
                    <div className="product-thumb__actions">
                      <div className="product-btn">
                        <button className="btn -white product__actions__item -round product-atc">
                          <FontAwesomeIcon icon={faShoppingBag} />
                        </button>
                      </div>
                      <div className="product-btn">
                        <button className="btn -white product__actions__item -round product-qv">
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                      </div>
                      <div className="product-btn">
                        <button className="btn -white product__actions__item -round">
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-content__header">
                      <div className="product-category">{product.category}</div>
                      <div className="rate">
                        <StarRating rating={product.rating} />
                      </div>
                    </div>
                    <Link
                      className="product-name"
                      href={`/product/${product.slug}`}
                    >
                      {product.name}
                    </Link>
                    <div className="product-content__footer">
                      <h5 className="product-price--main">
                        Rp {product.price.toLocaleString()}
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
