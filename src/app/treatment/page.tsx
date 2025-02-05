"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

type Treatment = {
  id: number;
  name: string;
  description: string;
  menu: string | string[];
  benefit: string | string[]; 
  imageUrl: string;
  btn: string;
};

export default function TreatmentPage() {
  const [data, setData] = useState<Treatment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/treatment");
        if (!response.ok) {
          console.error("Failed to fetch treatment:", response.statusText);
          return;
        }
        const responseData: Treatment[] = await response.json();

        // Parse benefit dan menu dalam satu operasi map
        const parsedData = responseData.map((treatment) => ({
          ...treatment,
          benefit: typeof treatment.benefit === "string"
            ? JSON.parse(treatment.benefit)
            : treatment.benefit,
          menu: typeof treatment.menu === "string"
            ? JSON.parse(treatment.menu)
            : treatment.menu
        }));

        setData(parsedData);
        console.log("Parsed Data:", parsedData); // Untuk debugging
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching treatments:", error.message);
        } else {
          console.error("Unexpected error:", error);
        }
      }
    };

    fetchData();
  }, []);

  //fungciton untuk memastikan menu adalah array
  const getMenus = (menu: string | string[]): string[] => {
    if (Array.isArray(menu)) return menu;
    try {
      return JSON.parse(menu);
    } catch {
      return [];
    }
  };

  // Function untuk memastikan benefit adalah array
  const getBenefits = (benefit: string | string[]): string[] => {
    if (Array.isArray(benefit)) return benefit;
    try {
      return JSON.parse(benefit);
    } catch {
      return [];
    }
  };



  return (
    <div className="w-full min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <h2>Treatment</h2>
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="container mx-auto px-4">
          {data.map((treatment, index) => (
            <div
              key={index}
              className="mb-16 last:mb-0 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/images/introduction/IntroductionThree/bg.png"
                      alt="background"
                      layout="fill"
                      objectFit="cover"
                      className="opacity-30"
                    />
                  </div>
                  {/* Main Image */}
                  <div className="relative z-10 p-8 md:p-12">
                    <div className="aspect-square relative">
                      <Image
                        src={treatment.imageUrl}
                        alt={treatment.name}
                        layout="fill"
                        objectFit="contain"
                        className="transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`w-full lg:w-1/2 p-8 md:p-12 ${
                    index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"
                  }`}
                >
                  <div className="space-y-6">
                    {/* Treatment Number */}
                    <div className="text-4xl font-bold text-gray-300">
                      0{treatment.id}.
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {treatment.name}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {treatment.description}
                    </p>

                    {/* Menu dan Benefit Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Menu List */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">
                          Menu
                        </h3>
                        <ul className="space-y-3">
                          {getMenus(treatment.menu).map(
                            (item, menuIndex) => (
                              <li
                              key={menuIndex}
                              className="flex items-center space-x-3 text-gray-700"
                            >
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="text-blue-500 w-4 h-4 flex-shrink-0"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefit List */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">
                          Benefit
                        </h3>
                        <ul className="space-y-3">
                          {getBenefits(treatment.benefit).map(
                            (item, benefitIndex) => (
                              <li
                                key={benefitIndex}
                                className="flex items-center space-x-3 text-gray-700"
                              >
                                <FontAwesomeIcon
                                  icon={faCheck}
                                  className="text-red-500 w-4 h-4 flex-shrink-0"
                                />
                                <span>{item}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>

                    {/* Button */}
                    <a
                      href="#"
                      className="inline-block px-8 py-3 bg-red-500 hover:bg-red-600 
                               text-white font-semibold rounded-full transition-colors 
                               duration-200 transform hover:scale-105"
                    >
                      {treatment.btn || "Hubungi Kami"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

