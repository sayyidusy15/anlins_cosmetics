import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke, faShoppingBag, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function ProductTab () {
    return (
        <div className="product-tab -style-2">
        <div className="container">
          <div className="product-tab__header">
            <h5>New arrivals</h5>
            <div className="product-tab-slide__header__controller">
              <ul>
                <li className="active"><a href="#">all</a></li>
                <li><a href="#">eyes</a></li>
                <li><a href="#">face</a></li>
                <li><a href="#">lips</a></li>
                <li><a href="#">set</a></li>
              </ul><a className="btn -white" href="shop-fullwidth-4col.html">View all</a>
            </div>
          </div>
          <div className="product-tab__content">
            <div className="product-tab__content__wrapper">
                {/* Card */}
              <div className="row mx-n1 mx-md-n3">

                <div className="col-6 col-md-3 px-1 px-md-3">
                        <div className="product ">
                            {/* Tag atau Product Tipe */}
                            <div className="product-type">
                                <h5 className="-new">New</h5>
                            </div>

                          <div className="product-thumb">
                            <a className="product-thumb__image" href="/shop/product-detail.html">
                                <img src="/images/product/1.png" alt="Product image"/>
                                <img src="/images/product/2.png" alt="Product image"/>
                            </a>
                            {/* icon hover */}
                            <div className="product-thumb__actions">
                              <div className="product-btn">
                                <a className="btn -white product__actions__item -round product-atc" href="#">
                                    <FontAwesomeIcon icon={faShoppingBag}/>
                                </a>
                              </div>
                              <div className="product-btn">
                                <a className="btn -white product__actions__item -round product-qv" href="#">
                                    <FontAwesomeIcon icon={faEye}/>
                                </a>
                              </div>
                              <div className="product-btn">
                                <a className="btn -white product__actions__item -round" href="#">
                                    <FontAwesomeIcon icon={faHeart}/>
                                </a>
                              </div>
                            </div>

                          </div>
                          <div className="product-content">
                            <div className="product-content__header">
                            {/* product category */}
                              <div className="product-category">eyes</div>
                              {/* Rating */}
                                    <div className="rate ">
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
                                        <FontAwesomeIcon icon={faStarHalfStroke} className='text-yellow-500'/>
                                    </div>
                            </div>
                            {/* product title */}
                            <a className="product-name" href="/shop/product-detail.html">The expert mascaraa</a>

                            <div className="product-content__footer">
                            {/* Price */}
                            <h5 className="product-price--main">$35.00</h5>
                              {/* color type */}
                              <div className="product-colors">
                                <div className="product-colors__item bg-[#8B0000]"></div>
                                <div className="product-colors__item bg-[#4169E1]"></div>
                              </div>
                            </div>

                          </div>
                        </div>
                </div>

                <div className="col-6 col-md-3 px-1 px-md-3">
                        <div className="product ">
                          <div className="product-type"></div>
                          <div className="product-thumb"><a className="product-thumb__image" href="/shop/product-detail.html"><img src="/images/product/2.png" alt="Product image"/><img src="/images/product/3.png" alt="Product image"/></a>
                            <div className="product-thumb__actions">
                              <div className="product-btn"><a className="btn -white product__actions__item -round product-atc" href="#"><i className="fas fa-shopping-bag"></i></a>
                              </div>
                              <div className="product-btn"><a className="btn -white product__actions__item -round product-qv" href="#"><i className="fas fa-eye"></i></a>
                              </div>
                              <div className="product-btn"><a className="btn -white product__actions__item -round" href="#"><i className="fas fa-heart"></i></a>
                              </div>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="product-content__header">
                              <div className="product-category">eyes</div>
                                    <div className="rate"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                            </div><a className="product-name" href="/shop/product-detail.html">Velvet Melon High Intensity</a>
                            <div className="product-content__footer">
                              <h5 className="product-price--main">$38.00</h5>
                            </div>
                          </div>
                        </div>
                </div>
                <div className="col-6 col-md-3 px-1 px-md-3">
                        <div className="product ">
                          <div className="product-type"><h5 className="-sale">-15%</h5></div>
                          <div className="product-thumb"><a className="product-thumb__image" href="/shop/product-detail.html"><img src="/images/product/3.png" alt="Product image"/><img src="/images/product/4.png" alt="Product image"/></a>
                            <div className="product-thumb__actions">
                              <div className="product-btn"><a className="btn -white product__actions__item -round product-atc" href="#"><i className="fas fa-shopping-bag"></i></a>
                              </div>
                              <div className="product-btn"><a className="btn -white product__actions__item -round product-qv" href="#"><i className="fas fa-eye"></i></a>
                              </div>
                              <div className="product-btn"><a className="btn -white product__actions__item -round" href="#"><i className="fas fa-heart"></i></a>
                              </div>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="product-content__header">
                              <div className="product-category">eyes</div>
                                    <div className="rate"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></div>
                            </div><a className="product-name" href="/shop/product-detail.html">Leather shopper bag</a>
                            <div className="product-content__footer">
                              <h5 className="product-price--main">$30.00</h5>
                              <h5 className="product-price--discount">$35.00</h5>
                              <div className="product-colors">
                                <div className="product-colors__item bg-[#8B0000]"></div>
                                <div className="product-colors__item bg-[#4169E1]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                </div>
                <div className="col-6 col-md-3 px-1 px-md-3">
                        <div className="product ">
                          <div className="product-type"></div>
                          <div className="product-thumb"><a className="product-thumb__image" href="/shop/product-detail.html"><img src="/images/product/4.png" alt="Product image"/><img src="/images/product/5.png" alt="Product image"/></a>
                            <div className="product-thumb__actions">
                              <div className="product-btn"><a className="btn -white product__actions__item -round product-atc" href="#"><i className="fas fa-shopping-bag"></i></a>
                              </div>
                              <div className="product-btn"><a className="btn -white product__actions__item -round product-qv" href="#"><i className="fas fa-eye"></i></a>
                              </div>
                              <div className="product-btn"><a className="btn -white product__actions__item -round" href="#"><i className="fas fa-heart"></i></a>
                              </div>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="product-content__header">
                              <div className="product-category">eyes</div>
                                    <div className="rate"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                            </div><a className="product-name" href="/shop/product-detail.html">Luxe jewel lipstick</a>
                            <div className="product-content__footer">
                              <h5 className="product-price--main">$38.00</h5>
                            </div>
                          </div>
                        </div>
                </div>
                <div className="col-6 col-md-3 px-1 px-md-3">
                        <div className="product ">
                          <div className="product-type"><h5 className="-sale">-50%</h5></div>
                          <div className="product-thumb"><a className="product-thumb__image" href="/shop/product-detail.html"><img src="/images/product/5.png" alt="Product image"/><img src="/images/product/6.png" alt="Product image"/></a>
                            <div className="product-thumb__actions">
                              <div className="product-btn"><a className="btn -white product__actions__item -round product-atc" href="#"><i className="fas fa-shopping-bag"></i></a>
                              </div>
                              <div className="product-btn"><a className="btn -white product__actions__item -round product-qv" href="#"><i className="fas fa-eye"></i></a>
                              </div>
                              <div className="product-btn"><a className="btn -white product__actions__item -round" href="#"><i className="fas fa-heart"></i></a>
                              </div>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="product-content__header">
                              <div className="product-category">face</div>
                                    <div className="rate"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                            </div><a className="product-name" href="/shop/product-detail.html">Penpoint seamless beauty</a>
                            <div className="product-content__footer">
                              <h5 className="product-price--main">$20.00</h5>
                              <h5 className="product-price--discount">$40.00</h5>
                            </div>
                          </div>
                        </div>
                </div>
                <div className="col-6 col-md-3 px-1 px-md-3">
                        <div className="product ">
                          <div className="product-type"></div>
                          <div className="product-thumb"><a className="product-thumb__image" href="/shop/product-detail.html"><img src="/images/product/7.png" alt="Product image"/><img src="/images/product/8.png" alt="Product image"/></a>
                            <div className="product-thumb__actions">
                              <div className="product-btn"><a className="btn -white product__actions__item -round product-atc" href="#"><i className="fas fa-shopping-bag"></i></a>
                              </div>
                              <div className="product-btn"><a className="btn -white product__actions__item -round product-qv" href="#"><i className="fas fa-eye"></i></a>
                              </div>
                              <div className="product-btn"><a className="btn -white product__actions__item -round" href="#"><i className="fas fa-heart"></i></a>
                              </div>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="product-content__header">
                              <div className="product-category">face</div>
                                    <div className="rate"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                            </div><a className="product-name" href="/shop/product-detail.html">The Sneaky lips</a>
                            <div className="product-content__footer">
                              <h5 className="product-price--main">$38.00</h5>
                            </div>
                          </div>
                        </div>
                </div>
                <div className="col-6 col-md-3 px-1 px-md-3">
                        <div className="product ">
                          <div className="product-type"></div>
                          <div className="product-thumb"><a className="product-thumb__image" href="/shop/product-detail.html"><img src="/images/product/8.png" alt="Product image"/><img src="/images/product/9.png" alt="Product image"/></a>
                            <div className="product-thumb__actions">
                              <div className="product-btn"><a className="btn -white product__actions__item -round product-atc" href="#"><i className="fas fa-shopping-bag"></i></a>
                              </div>
                              <div className="product-btn"><a className="btn -white product__actions__item -round product-qv" href="#"><i className="fas fa-eye"></i></a>
                              </div>
                              <div className="product-btn"><a className="btn -white product__actions__item -round" href="#"><i className="fas fa-heart"></i></a>
                              </div>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="product-content__header">
                              <div className="product-category">face</div>
                                    <div className="rate"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></div>
                            </div><a className="product-name" href="/shop/product-detail.html">White Facial Cream</a>
                            <div className="product-content__footer">
                              <h5 className="product-price--main">$38.00</h5>
                            </div>
                          </div>
                        </div>
                </div>
                <div className="col-6 col-md-3 px-1 px-md-3">
                        <div className="product ">
                          <div className="product-type"></div>
                          <div className="product-thumb"><a className="product-thumb__image" href="/shop/product-detail.html"><img src="/images/product/9.png" alt="Product image"/><img src="/images/product/10.png" alt="Product image"/></a>
                            <div className="product-thumb__actions">
                              <div className="product-btn"><a className="btn -white product__actions__item -round product-atc" href="#"><i className="fas fa-shopping-bag"></i></a>
                              </div>
                              <div className="product-btn"><a className="btn -white product__actions__item -round product-qv" href="#"><i className="fas fa-eye"></i></a>
                              </div>
                              <div className="product-btn"><a className="btn -white product__actions__item -round" href="#"><i className="fas fa-heart"></i></a>
                              </div>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="product-content__header">
                              <div className="product-category">face</div>
                                    <div className="rate"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></div>
                            </div><a className="product-name" href="/shop/product-detail.html">Orange Massage Cream</a>
                            <div className="product-content__footer">
                              <h5 className="product-price--main">$55.00</h5>
                            </div>
                          </div>
                        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}