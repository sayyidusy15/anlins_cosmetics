import React from "react";

const HomePageSekeleton = () => {
  return (
    <div className="slider -style-2 slider-arrow-middle">
      <div className="relative w-full h-[500px] bg-gray-200 animate-pulse rounded-lg">
        {/* Swiper Pagination */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageSekeleton;
