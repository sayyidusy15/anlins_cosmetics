"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faShoppingBag,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductSkeleton from "../../elements/skeleton/ProductTabSkeleton";

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

// Tipe untuk props StarRating
interface StarRatingProps {
  rating: number; // Menentukan bahwa rating harus berupa angka
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

export default function ProductTab() {
  // menghubungkan data product dari API
  const [data, setData] = useState<Product[]>([]);
  // fitur loading
  const [isLoading, setIsLoading] = useState(true);
  //penanganan error
  const [error, setError] = useState<Error | null>(null);

  // ambil data product dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/productTab");
        console.log("API Response:", response);
        if (!response.ok) {
          console.error("Failed to fetch products:", response.statusText);
          return;
        }
        const data: Product[] = await response.json();
        console.log("Fetched Data:", data);
        setData(data);
        setError(null); //clear error on success
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching products:", error.message);
          setError(error);
        } else {
          console.error("Unexpected error:", error);
          setError(new Error("An unexpected error occurred"));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // loading
  if (isLoading) {
    return <ProductSkeleton />;
    // Tampilkan loading jika data masih diambil dari API
    // bisa diganti dengan skeleton atau spinner
  }

  // error handling
  if (error) {
    return <div>Error: {error.message}</div>; // Tampilkan pesan error jika gagal mengambil data dari API
  }

  return (
    <div className="product-tab -style-2">
      <div className="container">
        {/* Product Tab Header */}
        <div className="product-tab__header">
          <h5>Product Terbaru</h5>
          <div className="product-tab-slide__header__controller">
            {/* <ul>
                <li className="active"><a href="#">all</a></li>
                <li><a href="#">eyes</a></li>
                <li><a href="#">face</a></li>
                <li><a href="#">lips</a></li>
                <li><a href="#">set</a></li>
              </ul> */}

            <a className="btn -white" href="shop-fullwidth-4col.html">
              View all
            </a>
          </div>
        </div>

        {/* Product Tab Content */}
        <div className="product-tab__content">
          <div className="product-tab__content__wrapper">
            <div className="row mx-n1 mx-md-n3">
              {/* Card Start */}
              {data.map((product, index) => (
                <div key={index} className="col-6 col-md-3 px-1 px-md-3">
                  <div className="product ">
                    {/* Tag atau Product Tipe */}
                    {/* <div className="product-type">
                                <h5 className="-new">New</h5>
                            </div> */}

                    {/* If product discount */}
                    {/* <div className="product-type">
                              <h5 className="-sale">-15%</h5>
                            </div> */}

                    <div className="product-thumb">
                      <Link
                        className="product-thumb__image"
                        href={`/product/${product.slug}`}
                      >
                        <Image
                          src="/images/product/1.png"
                          alt="Product image"
                          width={500}
                          height={500}
                        />
                        <Image
                          src="/images/product/2.png"
                          alt="Product image"
                          width={500}
                          height={500}
                        />
                      </Link>
                      {/* icon hover */}
                      <div className="product-thumb__actions">
                        <div className="product-btn">
                          <a
                            className="btn -white product__actions__item -round product-atc"
                            href="#"
                          >
                            <FontAwesomeIcon icon={faShoppingBag} />
                          </a>
                        </div>
                        <div className="product-btn">
                          <a
                            className="btn -white product__actions__item -round product-qv"
                            href="#"
                          >
                            <FontAwesomeIcon icon={faEye} />
                          </a>
                        </div>
                        <div className="product-btn">
                          <a
                            className="btn -white product__actions__item -round"
                            href="#"
                          >
                            <FontAwesomeIcon icon={faHeart} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="product-content__header">
                        {/* product category */}
                        <div className="product-category">
                          {product.category}
                        </div>
                        {/* Rating */}
                        <div className="rate ">
                          <StarRating rating={product.rating} />{" "}
                          {/* Contoh rating */}
                        </div>
                      </div>
                      {/* product title */}
                      <Link
                        className="product-name"
                        href={`/product/${product.slug}`}
                      >
                        {product.name}
                      </Link>

                      <div className="product-content__footer">
                        {/* Price */}
                        <h5 className="product-price--main">
                          {/* product price dalam rupiah */}
                          Rp {product.price.toLocaleString()}
                        </h5>
                        {/* product price coret */}
                        {/* <h5 className="product-price--discount">$35.00</h5> */}

                        {/* color type */}
                        {/* you can delete or comment this if product didnt have product color */}
                        {/* <div className="product-colors">
                                <div className="product-colors__item bg-[#8B0000]"></div>
                                <div className="product-colors__item bg-[#4169E1]"></div>
                              </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Card End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
