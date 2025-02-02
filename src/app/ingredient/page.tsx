"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
type Ingredient = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

export default function Ingredients() {
  const [data, setData] = useState<Ingredient[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/ingredients");
        console.log("API Response:", response);
        if (!response.ok) {
          console.error("Failed to fetch ingredients:", response.statusText);
          return;
        }
        const data: Ingredient[] = await response.json(); 
        // console.log('Fetched Data:', data);
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching ingredients:", error.message);
        } else {
          console.error("Unexpected error:", error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="introduction-six">
      <div className="container">
        <div className="section-title -center mb-[1.875em] ">
          <h2>Kenali bahan produk kami</h2>
        </div>

        <div className="introduction-six__wrapper">
          <div className="row">
            {/* card start */}
            {data.map((ingredient, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="introduction-six__wrapper__item">
                  <div className="introduction-six__wrapper__item__image">
                    <Image
                      src={ingredient.imageUrl}
                      alt="Rosehip Seed Oil"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="introduction-six__wrapper__item__content">
                    <a href="#">{ingredient.name}</a>
                    <p>{ingredient.description}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* card end */}
          </div>
        </div>
      </div>
    </div>
  );
}
