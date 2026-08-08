import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faShoppingBag,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  rating: number;
  slug?: string;
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

interface ProductTabProps {
  data: Product[];
}

export default function ProductTab({ data }: ProductTabProps) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="product-tab -style-2">
      <div className="container">
        <div className="product-tab__header mt-5">
          <h5>Produk Tersedia</h5>
        </div>

        <div className="product-tab__content">
          <div className="product-tab__content__wrapper">
            <div className="row mx-n1 mx-md-n3">
              {data.map((product, index) => (
                <div key={index} className="col-6 col-md-3 px-1 px-md-3">
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
                      </Link>
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
                        <div className="product-category">
                          {product.category}
                        </div>
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
                          Rp {Number(product.price).toLocaleString('id-ID')}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
