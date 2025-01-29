"use client";

import React, { useState, FormEvent } from "react"; // Tambahkan FormEvent
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  // faAngleDown, 
  faTimes 
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Tambahkan type FormEvent<HTMLFormElement>
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setIsSearchOpen(false);
  };

  return (
    <div className="menu -style-3 ">
      <div className="container">
        <div className="menu__wrapper">
          <Link href="/">
            <Image 
            src="/images/logo-anlins.png" 
            // src="/images/logo-text-anlins.png" 
            alt="Logo" 
            width={150} 
            height={50} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="navigator -black mt-2">
              <ul>
                <li className="relative">
                  {/* === Home === */}
                  {/* <a href="">
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
                      <a href="">Makeup Salon</a>
                    </li>
                    <li>
                      <a href="">Natural Shop</a>
                    </li>
                    <li>
                      <a href="">Spa Shop</a>
                    </li>
                    <li>
                      <a href="">Mask Shop</a>
                    </li>
                    <li>
                      <a href="">Skincare Shop</a>
                    </li>
                  </ul> */}
                </li>
                {/* === Services === */}
                <li>
                  {/* <a href="">Services</a> */}
                </li>
                {/* === About === */}
                <li>
                  {/* <a href="">About</a> */}
                </li>
                {/* === Shop === */}
                <li>
                  {/* <a href="">
                    Shop
                    <span className="dropable-icon">
                      <FontAwesomeIcon icon={faAngleDown} />
                    </span>
                  </a> */}

                  <ul className="dropdown-menu -wide">
                    <ul className="dropdown-menu__col">
                      <li>
                        <a href="">Shop Fullwidth 4 Columns</a>
                      </li>
                      <li>
                        <a href="">Shop Fullwidth 5 Columns</a>
                      </li>
                      <li>
                        <a href="">Shop Fullwidth Left Sidebar</a>
                      </li>
                      <li>
                        <a href="">Shop Fullwidth Right Sidebar</a>
                      </li>
                    </ul>
                    <ul className="dropdown-menu__col">
                      <li>
                        <a href="">Shop grid 4 Columns</a>
                      </li>
                      <li>
                        <a href="">Shop Grid 3 Columns</a>
                      </li>
                      <li>
                        <a href="">Shop Grid Sideber</a>
                      </li>
                      <li>
                        <a href="">Shop List Sidebar</a>
                      </li>
                    </ul>
                    <ul className="dropdown-menu__col">
                      <li>
                        <a href="">Product Detail</a>
                      </li>
                      <li>
                        <a href="">Shopping cart</a>
                      </li>
                      <li>
                        <a href="">Checkout</a>
                      </li>
                      <li>
                        <a href="">Wish list</a>
                      </li>
                    </ul>

                    {/* banner */}
                    <ul className="dropdown-menu__col -banner">
                      <a href="">
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
                {/* <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Desktop Menu Functions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className="menu-icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Image
                src="/images/header/search-icon.png"
                alt="Search icon"
                width={18}
                height={18}
              />
            </button>

            {/* <a href="" className="menu-icon">
              <Image
                src="/images/header/wishlist-icon.png"
                alt="Wishlist Icon"
                width={20}
                height={20}
              />
            </a> */}

            {/* <div className="menu-cart relative">
              <a href="" className="flex items-center">
                <Image
                  src="/images/header/cart-icon.png"
                  alt="Cart icon"
                  width={20}
                  height={20}
                />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
              </a>
            </div> */}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <Link href="/">
                  <Image
                    src="/images/logo-anlins.png" 
                    alt="Logo"
                    width={150}
                    height={50}
                  />
                </Link>
                <button
                  className="text-2xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>

              {/* Search bar in mobile menu */}
              <div className="mb-6">
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Cari produk kosmetik apa?"
                      className="w-full p-3 border rounded-lg"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <Image
                        src="/images/header/search-icon.png"
                        alt="Search icon"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                </form>
              </div>

              {/* <nav>
                <ul className="space-y-4">
                  <li>
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer text-xl font-bold text-slate-950">
                        Home
                        <FontAwesomeIcon icon={faAngleDown} />
                      </summary>
                      <ul className="pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 max-h-0 group-open:max-h-96">
                        <li>
                          <a className="text-lg font-semibold text-slate-600" href="">Beauty Salon</a>
                        </li>
                        <li>
                          <a className="text-lg font-semibold text-slate-600" href="">Makeup Salon</a>
                        </li>
                        <li>
                          <a className="text-lg font-semibold text-slate-600" href="">Natural Shop</a>
                        </li>
                        <li>
                          <a className="text-lg font-semibold text-slate-600" href="">Spa Shop</a>
                        </li>
                        <li>
                          <a className="text-lg font-semibold text-slate-600" href="">Mask Shop</a>
                        </li>
                        <li>
                          <a className="text-lg font-semibold text-slate-600" href="">Skincare Shop</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a className="text-xl font-bold text-slate-950" href="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="text-xl font-bold text-slate-950" href="">
                      About
                    </a>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer text-xl font-bold text-slate-950">
                        Shop
                        <FontAwesomeIcon icon={faAngleDown} />
                      </summary>
                      <ul className="pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 max-h-0 group-open:max-h-96">
                        <li>
                          <a className="text-lg font-semibold text-slate-600" href="">Shop Fullwidth 4 Columns</a>
                        </li>
                        <li>
                          <a className="text-lg font-semibold text-slate-600" href="">Shop Grid 3 Columns</a>
                        </li>
                        <li>
                          <a className="text-lg font-semibold text-slate-600" href="">Product Detail</a>
                        </li>
                        <li>
                          <a className="text-lg font-semibold text-slate-600" href="">Shopping Cart</a>
                        </li>
                        <ul className="dropdown-menu__col -banner">
                          <a href="">
                            <Image
                              src="/images/header/dropdown-menu-banner.png"
                              alt="New product banner"
                              width={300}
                              height={300}
                            />
                          </a>
                        </ul>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a className="text-xl font-bold text-slate-950" href="">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-xl font-bold text-slate-950" href="">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav> */}

              {/* Mobile Menu Footer with Cart and Wishlist */}
              {/* <div className="mt-8 pt-4 border-t">
                <div className="space-y-4">
                  <a href="" className="flex items-center space-x-2">
                    <Image
                      src="/images/header/wishlist-icon.png"
                      alt="Wishlist Icon"
                      width={20}
                      height={20}
                    />
                    <span className="text-lg font-semibold text-slate-900">Wishlist</span>
                  </a>
                  <a href="" className="flex items-center space-x-2">
                    <Image
                      src="/images/header/cart-icon.png"
                      alt="Cart icon"
                      width={20}
                      height={20}
                    />
                    <span className="text-lg font-semibold text-slate-900">Cart (0)</span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        )}

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg w-full max-w-2xl mx-4 relative">
              <button
                className="absolute -top-10 right-0 text-white text-2xl"
                onClick={() => setIsSearchOpen(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari produk kosmetik apa?"
                    className="w-full p-4 border rounded-lg pr-12"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  >
                    <Image
                      src="/images/header/search-icon.png"
                      alt="Search icon"
                      width={18}
                      height={18}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
