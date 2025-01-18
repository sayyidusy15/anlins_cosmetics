// CSS FAMILY
import "@/styles/style.css";
import "@/styles/bootstrap-drawer.min.css";
import "@/styles/bootstrap.css";
import "@/styles/drawer.min.css";
import "@/styles/jquery.modal.min.css";
import "@/styles/slick.min.css";

import Image from "next/image";

export default function ProductId() {
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
                      <h5>eyes</h5>
                      <h2>The expert mascaraa</h2>
                    </div>
                    <h3>$35.00</h3>
                    <div className="divider"></div>
                    <div className="product-detail__content__footer">
                      <ul>
                        <li>Brand:gucci</li>
                        <li>Product code: PM 01</li>
                        <li>Reward point: 30</li>
                        <li>Availability: In Stock</li>
                      </ul>
                      <div className="product-detail__controller">
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
                          <a className="btn -round -red" href="#">
                            <i className="fas fa-shopping-bag"></i>
                          </a>
                          <h5>Beli Sekarang</h5>
                        </div>
                        <div className="product-detail__controler__actions"></div>
                        <a className="btn -round -white" href="#">
                          <i className="fas fa-heart"></i>
                        </a>
                      </div>
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis ipsum suspendisse
                              ultrices gravida. Risus commodo viverra maecenas
                              accumsan lacus vel facilisis.
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
