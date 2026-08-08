import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

export type SliderItem = {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  imageUrl: string;
  direction: string;
};

interface SliderProps {
  data: SliderItem[];
}

export default function Slider({ data }: SliderProps) {
  if (!data || data.length === 0) {
    return null;
  }

  const renderSlideContent = (item: SliderItem) => (
    <div className="slider__carousel__item slider-2 relative w-full overflow-hidden min-h-[480px] md:min-h-[560px] lg:min-h-[620px] flex items-center">
      {/* Full Hero Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay Text Content on Left */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 py-12">
        <div className="max-w-xl text-left">
          <h5 className="slider-content__subtitle text-[#EF4444] text-xs md:text-sm lg:text-base tracking-[0.2em] font-bold uppercase mb-3">
            {item.subtitle}
          </h5>
          <h1 className="slider-content__title text-[#181818] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4">
            {item.title}
          </h1>
          <p className="slider-content__description text-[#4B5563] text-sm md:text-base lg:text-lg font-normal mb-8 max-w-md leading-relaxed">
            {item.description}
          </p>
          <div>
            <a
              href="#products"
              className="btn -dark inline-block bg-[#111111] hover:bg-[#282828] text-white px-8 py-3.5 font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {item.direction || "LIHAT PRODUK KAMI"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  if (data.length === 1) {
    return renderSlideContent(data[0]);
  }

  return (
    <div className="slider -style-2 relative">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        loop={data.length > 1}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        fadeEffect={{
          crossFade: true,
        }}
        speed={1000}
        className="slider__carousel"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {renderSlideContent(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination"></div>
    </div>
  );
}
