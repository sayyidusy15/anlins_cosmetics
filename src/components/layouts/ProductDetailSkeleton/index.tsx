import React from 'react';

const ProductDetailSkeleton = () => {
  return (
    <div id="content">
      <div className="breadcrumb">
        <div className="container">
          <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
      <div className="shop">
        <div className="container">
          <div className="product-detail__wrapper">
            <div className="row">
              {/* Left column - Product Image */}
              <div className="col-12 col-md-6">
                <div className="w-full aspect-square bg-gray-200 rounded animate-pulse" />
              </div>

              {/* Right column - Product Details */}
              <div className="col-12 col-md-6">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="w-24 h-5 bg-gray-200 rounded animate-pulse" />
                    <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse" />
                  </div>

                  {/* Price */}
                  <div className="w-40 h-8 bg-gray-200 rounded animate-pulse" />

                  <div className="w-full h-px bg-gray-200" />

                  {/* Product Info List */}
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="w-48 h-5 bg-gray-200 rounded animate-pulse" />
                    ))}
                  </div>

                  {/* Product Controller */}
                  <div className="flex items-center space-x-4">
                    {/* Quantity Controller */}
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
                      <div className="w-10 h-10 bg-gray-200 rounded animate-pulse" />
                      <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
                    </div>

                    {/* Add to Cart Button */}
                    <div className="w-40 h-12 bg-gray-200 rounded animate-pulse" />

                    {/* Wishlist Button */}
                    <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
                  </div>

                  <div className="w-full h-px bg-gray-200" />

                  {/* Description Tab */}
                  <div className="space-y-4">
                    <div className="w-32 h-6 bg-gray-200 rounded animate-pulse" />
                    <div className="space-y-2">
                      <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
                      <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
                      <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse" />
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
};

export default ProductDetailSkeleton;