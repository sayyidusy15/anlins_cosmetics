import React from 'react';

const ProductSkeleton = () => {
  // Create an array of 8 items to match a typical product grid
  const skeletons = Array(8).fill(null);

  return (
    <div className="container">
      <div className="product-tab__header">
        <div className="h-8 w-40 bg-gray-200 rounded animate-bounce " />
        <div className="w-24 h-8 bg-gray-200 rounded animate-bounce " />
      </div>
      
      <div className="row mx-n1 mx-md-n3">
        {skeletons.map((_, index) => (
          <div key={index} className="col-6 col-md-3 px-1 px-md-3">
            <div className="flex flex-col space-y-4 p-4">
              {/* Image skeleton */}
              <div className="w-full h-64 bg-gray-200 rounded animate-bounce " />
              
              {/* Content skeleton */}
              <div className="space-y-3">
                {/* Category and rating */}
                <div className="flex justify-between">
                  <div className="w-20 h-4 bg-gray-200 rounded animate-bounce " />
                  <div className="w-24 h-4 bg-gray-200 rounded animate-bounce " />
                </div>
                
                {/* Product name */}
                <div className="w-full h-5 bg-gray-200 rounded animate-bounce " />
                
                {/* Price */}
                <div className="w-24 h-6 bg-gray-200 rounded animate-bounce " />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSkeleton;