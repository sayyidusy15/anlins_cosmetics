import { useState, type FormEvent } from "react";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faStar, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Product } from "./ProductTab";

interface NavbarProps {
  products?: Product[];
}

export default function Navbar({ products = [] }: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchProducts = (query: string) => {
    setIsLoading(true);
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredProducts);
    setIsLoading(false);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    if (q.length > 2) {
      searchProducts(q);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      searchProducts(searchQuery);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const SearchResults = () => (
    <div className="bg-white shadow-xl rounded-lg mt-2 max-h-[70vh] overflow-y-auto">
      {isLoading ? (
        <div className="p-4 text-center text-gray-500">Mencari produk...</div>
      ) : searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {searchResults.map((product) => (
            <Link
              href={`/product/${product.slug || product.id}`}
              key={product.id}
              className="flex bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery("");
              }}
            >
              <div className="w-24 h-24 relative flex-shrink-0">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-3">
                <div className="text-xs text-black mb-1">
                  {product.category}
                </div>
                <h3 className="font-medium text-black text-sm mb-1 line-clamp-2">
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
  );

  return (
    <header className="menu -style-3 relative bg-slate-900 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="menu__wrapper flex items-center justify-between">
          <Link href="/">
            <img
              src="/images/logo_bg_dark.png"
              alt="Anlins Logo"
              className="h-12 object-contain"
            />
          </Link>

          {/* Search Icon */}
          <div className="flex items-center space-x-4">
            <button
              className="menu-icon p-2 hover:text-rose-400 transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FontAwesomeIcon icon={faSearch} className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="fixed top-0 left-0 right-0 bg-white text-slate-800 shadow-xl z-50 p-4">
            <div className="container mx-auto">
              <div className="relative">
                <form onSubmit={handleSearchSubmit} className="relative">
                  <input
                    type="text"
                    placeholder="Cari produk kosmetik..."
                    className="w-full p-4 pr-12 border rounded-lg text-slate-900"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    autoFocus
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
                  </button>
                </form>

                {searchQuery.length > 2 && <SearchResults />}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
