import { useRef } from "react";
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
import { Link } from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Product } from "./ProductTab";

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

interface ProductDetailSliderProps {
  data: Product[];
}

export default function ProductDetailSlider({ data }: ProductDetailSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="product-tab -style-2 relative my-12">
      <div className="container">
        <div className="product-tab__header">
          <h5>Product Terbaru</h5>
        </div>

        <div className="product-tab__content relative">
          {/* Custom Left & Right Navigation Buttons */}
          <button
            type="button"
            aria-label="Previous Slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-11 h-11 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-slate-100 transition-all focus:outline-none cursor-pointer"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-slate-700 text-sm" />
          </button>

          <button
            type="button"
            aria-label="Next Slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-11 h-11 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-slate-100 transition-all focus:outline-none cursor-pointer"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-slate-700 text-sm" />
          </button>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            loop={true}
            slidesPerView={4}
            speed={600}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 12,
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
            className="product-slider"
          >
            {data.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="product">
                  <div className="product-thumb">
                    <Link
                      className="product-thumb__image"
                      href={`/product/${product.slug || product.id}`}
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                      />
                      <img
                        src={product.imageUrl}
                        alt={product.name}
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
                      href={`/product/${product.slug || product.id}`}
                    >
                      {product.name}
                    </Link>
                    <div className="product-content__footer">
                      <h5 className="product-price--main">
                        Rp {Number(product.price).toLocaleString("id-ID")}
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
