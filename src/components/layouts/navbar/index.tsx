"use client";

import React, { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faStar } from "@fortawesome/free-solid-svg-icons";

// Interface untuk tipe produk sesuai dengan data yang ada
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  rating: number;
  slug: string;
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  // Fetch semua produk saat komponen dimount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/productTab");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Function untuk mencari produk
  const searchProducts = (query: string) => {
    setIsLoading(true);
    const filteredProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredProducts);
    setIsLoading(false);
  };

  // Handle search input changes
  useEffect(() => {
    if (searchQuery.length > 2) {
      searchProducts(searchQuery);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      searchProducts(searchQuery);
    }
  };

  // Format harga ke Rupiah
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="menu -style-3 relative">
      <div className="container">
        <div className="menu__wrapper">
          <Link href="/">
            <Image 
              src="/images/logo-anlins.png" 
              alt="Logo" 
              width={150} 
              height={50} 
            />
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
              {/* ... navigation items ... */}
            </div>
          </div>

          {/* Search Icon */}
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
          </div>
        </div>

        {/* Search Overlay dengan Card Products */}
        {isSearchOpen && (
          <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
            <div className="container mx-auto p-4">
              <div className="relative">
                {/* Search Input */}
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Cari produk kosmetik apa?"
                    className="w-full p-4 pr-12 border rounded-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
                  </button>
                </form>

                {/* Search Results */}
                {searchQuery.length > 2 && (
                  <div className="absolute w-full bg-white shadow-xl rounded-lg mt-2 max-h-[70vh] overflow-y-auto">
                    {isLoading ? (
                      <div className="p-4 text-center text-gray-500">
                        Mencari produk...
                      </div>
                    ) : searchResults.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                        {searchResults.map((product) => (
                          <Link
                            href={`/product/${product.slug}`}
                            key={product.id}
                            className="flex bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
                          >
                            <div className="w-24 h-24 relative flex-shrink-0">
                              <Image
                                // src={product.imageUrl || "/images/product/1.png"}
                                src={"/images/product/1.png"}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 p-3">
                              <div className="text-xs text-gray-500 mb-1">
                                {product.category}
                              </div>
                              <h3 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
                                {product.name}
                              </h3>
                              <div className="flex items-center justify-between">
                                <p className="text-rose-500 font-semibold text-sm">
                                  {formatPrice(product.price)}
                                </p>
                                <div className="flex items-center">
                                  <FontAwesomeIcon 
                                    icon={faStar} 
                                    className="text-yellow-400 w-3 h-3" 
                                  />
                                  <span className="text-xs text-gray-600 ml-1">
                                    {product.rating}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        Tidak ada produk yang ditemukan
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

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
            </div>
          </div>
        )}
      
      </div>
    </div>
  );
};

export default Navbar;