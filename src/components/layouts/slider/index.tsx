"use client";
import { useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import untuk efek fade
import Image from "next/image";

type HomePageSlider = {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  imageUrl: string;
  direction: string;
};

import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import HomePageSekeleton from "@/components/elements/skeleton/homePageSliderSekeleton";

export default function Slider() {
  const [data, setData] = useState<HomePageSlider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/HomePageSlider");
        if (!response.ok) {
          console.error("Failed to fetch HomePageSlider:", response.statusText);
          return;
        }
        const data: HomePageSlider[] = await response.json();
        setData(data);
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unexpected error occurred"));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <HomePageSekeleton />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <div className="slider -style-2 slider-arrow-middle">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]} // Menambahkan module Autoplay
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        loop
        effect="fade"
        autoplay={{
          delay: 5000, // Auto slide setiap 5 detik
          disableOnInteraction: false, // Menjaga autoplay meskipun ada interaksi
        }}
        fadeEffect={{
          crossFade: true,
        }}
        speed={1000}
        className="slider__carousel"
      >
        {/* === SLIDER === */}
        {data.map((HomePageSlider, index)=>(
        <SwiperSlide key={index}>
        <div className="slider__carousel__item slider-2">
          <div className="container">
            <div className="slider-background">
              <Image
                className="slider-background"
                src={HomePageSlider.imageUrl}
                alt="Slider background"
                width={1920}
                height={1080}
              />
            </div>
            <div className="slider-content">
              <h5 className="slider-content__subtitle">{HomePageSlider.subtitle}</h5>
              <h1 className="slider-content__title">{HomePageSlider.title}</h1>
              <p className="slider-content__description">
                {HomePageSlider.description}
              </p>
              <a className="btn -dark" href="#">
                {HomePageSlider.direction}
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
        ))}

      </Swiper>

      {/* Custom pagination styling */}
      <div className="swiper-pagination "></div>
    </div>
  );
}
