import Image from "next/image";

export default function NavbarTwo(){
    return(
        <div className="menu -style-6">
          <div className="container">
            <div className="menu__wrapper">
              {/* Search Box */}
              <div className="menu-functions">
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
              </div>
    
              {/* Navigation */}
              <div className="navigator">
                <ul className="navigator_part -left">

                  <li>
                    <a href="fullwidth-4col.html">Eyes</a>
                  </li>
                  <li>
                    <a href="fullwidth-4col.html">Face</a>
                  </li>
                  <li>
                    <a href="fullwidth-4col.html">Lips</a>
                  </li>
                </ul>
                {/* LOGO */}
                <a className="menu__wrapper__logo" href="index.html">
                    <Image 
                    src="/images/logo.png"
                    alt="Logo"
                    width={150}
                    height={50}
                    />
                  
                </a>
                <ul className="navigator_part -right">
                  <li>
                    <a href="fullwidth-4col.html">Cheek</a>
                  </li>
                  <li>
                    <a href="fullwidth-4col.html">Sets</a>
                  </li>
                  <li>
                    <a href="fullwidth-4col.html">Nails</a>
                  </li>
                </ul>
              </div>
    
              {/* Wishlist and Cart */}
              <div className="menu-functions">
                <a className="menu-icon -wishlist" href="/wishlist.html">

                    <Image
                    src="/images/header/wishlist-icon.png"
                    alt="Wishlist Icon"
                    width={20}
                    height={20}
                    />
                </a>
                <div className="menu-cart">
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
                </div>
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
}