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
    <div id="content">
      <div className="breadcrumb">
        <div className="container">
          <h2>Services</h2>
          <ul>
            <li>Home</li>
            <li className="active">Services</li>
          </ul>
        </div>
      </div>

      <div className="shop">
        <div className="container">
          {data.map((treatment, index) => (
            <div key={index} className="services__item">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="services__item__image">
                    <div className="services__item__image__background">
                      <Image
                        src="/images/introduction/IntroductionThree/bg.png"
                        alt="background"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="services__item__image__detail">
                      <div className="image__item">
                        <div className="wrapper">
                          <Image
                            data-depth="0.3"
                            src="/images/contact/1_1.png"
                            alt="image"
                            width={500}
                            height={500}
                          />
                        </div>
                      </div>
                      <div className="image__item">
                        <div className="wrapper">
                          {/* Gambar kecil di depan bisa ditambahkan di sini jika diperlukan */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="services__item__content">
                    <div className="services__item__order">
                      <h3>0{treatment.id}.</h3>
                    </div>
                    <h2 className="services__item__title">{treatment.name}</h2>
                    <p className="services__item__description">
                      {treatment.description}
                    </p>
                    {/* Bagian benefit yang sudah dimodifikasi */}
                    <ul>
                      {getBenefits(treatment.benefit).map((item, benefitIndex) => (
                        <li key={benefitIndex}>
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="text-red-500"
                          />
                          {" "}{item}
                        </li>
                      ))}
                    </ul>
                    <a className="btn -white" href="#">
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
