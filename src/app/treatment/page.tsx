"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

type Treatment = {
  id: number;
  name: string;
  description: string;
  benefit: string | string[]; // Bisa menerima string atau array
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
        
        // Parse benefit jika masih dalam bentuk string
        const parsedData = responseData.map(treatment => ({
          ...treatment,
          benefit: typeof treatment.benefit === 'string' 
            ? JSON.parse(treatment.benefit) 
            : treatment.benefit
        }));
        
        setData(parsedData);
        console.log('Parsed Data:', parsedData); // Untuk debugging
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
          <h2>Shop</h2>
        </div>
      </div>
  
      {/* Content */}
      <div className="">
        <div className="container mx-auto px-4">
          {data.map((treatment, index) => (
            <div 
              key={index}
              className="mb-16 last:mb-0 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
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
                <div className={`w-full lg:w-1/2 p-8 md:p-12 ${
                  index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'
                }`}>
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
  
                    {/* Benefits List */}
                    <ul className="space-y-3">
                      {getBenefits(treatment.benefit).map((item, benefitIndex) => (
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
                      ))}
                    </ul>
  
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

// <div className="services__item -reverse">
//   <div className="row">
//     <div className="col-12 col-md-6 order-md-2">
//       <div className="services__item__image">
//         <div className="services__item__image__background">
//           <Image
//             src="/images/introduction/IntroductionThree/bg.png"
//             alt="background"
//             width={500}
//             height={500}
//           />
//         </div>
//         <div className="services__item__image__detail">
//           <div className="image__item">
//             <div className="wrapper">
//               <Image
//                 data-depth="0.3"
//                 src="/images/contact/2_1.png"
//                 alt="image"
//                 width={500}
//                 height={500}
//               />
//             </div>
//           </div>
//           <div className="image__item">
//             <div className="wrapper">
//               {/* Gambar kecil di depan */}
//               {/* <Image
//                 data-depth="0.2"
//                 data-invert-x="true"
//                 data-invert-y="true"
//                 src="/images/contact/2.png"
//                 alt="image"
//                 width={500}
//                 height={500}
//               /> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="col-12 col-md-6 order-md-1">
//       <div className="services__item__content">
//         <div className="services__item__order">
//           <h3>02.</h3>
//         </div>
//         <h2 className="services__item__title">Professinal makeup</h2>
//         <p className="services__item__description">
//           Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Quis
//           pendisse ultrices gravida. Risus commodo viverra lacus vel
//           facilisis.
//         </p>
//         <ul>
//           <li>
//             <i className="fas fa-check"></i>Lorem ipsum dolor sit
//             amet, consectetur.
//           </li>
//           <li>
//             <i className="fas fa-check"></i>Adipiscing elit, sed do
//             eiusmod tempor.
//           </li>
//           <li>
//             <i className="fas fa-check"></i>Incididunt ut labore et
//             dolore magna aliqua.
//           </li>
//           <li>
//             <FontAwesomeIcon
//               icon={faCheck}
//               className="text-red-500"
//             />
//             Quis ipsum suspendisse ultrices gravida.
//           </li>
//         </ul>
//         <a className="btn -white" href="#">
//           Read more
//         </a>
//       </div>
//     </div>
//   </div>
// </div>
