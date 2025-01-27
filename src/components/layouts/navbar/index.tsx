'use client';
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  
  return (
    <div className="menu -style-3 ">
      <div className="container">
        <div className="menu__wrapper">
          <Link href="/index.html">
            <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
          </Link>
          <div className="navigator -black mt-2">
            <ul>
              <li className="relative">
                {/* === Home === */}
                <a href="">
                  Home
                  <span className="dropable-icon">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="">Beauty Salon</a>
                  </li>
                  <li>
                    <a href="homepage2.html">Makeup Salon</a>
                  </li>
                  <li>
                    <a href="homepage3.html">Natural Shop</a>
                  </li>
                  <li>
                    <a href="homepage4.html">Spa Shop</a>
                  </li>
                  <li>
                    <a href="homepage5.html">Mask Shop</a>
                  </li>
                  <li>
                    <a href="homepage6.html">Skincare Shop</a>
                  </li>
                </ul>
              </li>
              {/* === Services === */}
              <li>
                <a href="services.html">Services</a>
              </li>
              {/* === About === */}
              <li>
                <a href="about.html">About</a>
              </li>
              {/* === Shop === */}
              <li>
                <a href="shop-fullwidth-4col.html">
                  Shop
                  <span className="dropable-icon">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </a>

                <ul className="dropdown-menu -wide">
                  <ul className="dropdown-menu__col">
                    <li>
                      <a href="shop-fullwidth-4col.html">
                        Shop Fullwidth 4 Columns
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-5col.html">
                        Shop Fullwidth 5 Columns
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-left-sidebar.html">
                        Shop Fullwidth Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-right-sidebar.html">
                        Shop Fullwidth Right Sidebar
                      </a>
                    </li>
                  </ul>
                  <ul className="dropdown-menu__col">
                    <li>
                      <a href="shop-grid-4col.html">Shop grid 4 Columns</a>
                    </li>
                    <li>
                      <a href="shop-grid-3col.html">Shop Grid 3 Columns</a>
                    </li>
                    <li>
                      <a href="shop-grid-sidebar.html">Shop Grid Sideber</a>
                    </li>
                    <li>
                      <a href="shop-list-sidebar.html">Shop List Sidebar</a>
                    </li>
                  </ul>
                  <ul className="dropdown-menu__col">
                    <li>
                      <a href="product-detail.html">Product Detail</a>
                    </li>
                    <li>
                      <a href="cart.html">Shopping cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wish list</a>
                    </li>
                  </ul>

                  <ul className="dropdown-menu__col -banner">
                    <a href="shop-fullwidth-4col.html">
                      <Image
                        src="/images/header/dropdown-menu-banner.png"
                        alt="New product banner"
                        width={300}
                        height={300}
                      />
                    </a>
                  </ul>
                </ul>
              </li>

              {/* BLOG */}
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="menu-functions -black">
            <a className="menu-icon -search" href="#">
              <Image
                src="/images/header/search-icon.png"
                alt="Search icon"
                width={18}
                height={18}
              />
            </a>

            <div className="search-box">
              <form>
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  name="search"
                />
                <button>
                  <Image
                    src="/images/header/search-icon.png"
                    alt="Search icon"
                    width={18}
                    height={18}
                  />
                </button>
              </form>
            </div>
            {/* <a className="menu-icon -wishlist" href="/wishlist.html">
              <Image
                src="/images/header/wishlist-icon.png"
                alt="Wishlist Icon"
                width={20}
                height={20}
              />
            </a> */}
            {/* <div className="menu-cart">
              <a className="menu-icon -cart" href="#">
                <Image
                  src="/images/header/cart-icon.png"
                  alt="Cart icon"
                  width={20}
                  height={20}
                />
                <span className="cart__quantity">0</span>
              </a>
              <h5>
                Cart:<span>$100</span>
              </h5>
            </div> */}
            <a className="menu-icon -navbar" href="#">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
