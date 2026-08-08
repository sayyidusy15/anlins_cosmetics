import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export type TreatmentItem = {
  id: number;
  name: string;
  description: string;
  menu: string | string[];
  benefit: string | string[];
  imageUrl: string;
  btn: string;
};

interface TreatmentProps {
  data: TreatmentItem[];
}

export default function Treatment({ data }: TreatmentProps) {
  if (!data || data.length === 0) {
    return null;
  }

  const getMenus = (menu: string | string[]): string[] => {
    if (Array.isArray(menu)) return menu;
    try {
      return JSON.parse(menu);
    } catch {
      return [];
    }
  };

  const getBenefits = (benefit: string | string[]): string[] => {
    if (Array.isArray(benefit)) return benefit;
    try {
      return JSON.parse(benefit);
    } catch {
      return [];
    }
  };

  return (
    <div className="container w-full bg-white mb-20">
      <div>
        <div className="container mx-auto px-4">
          <div className="section-title -center">
            <h2>Treatment</h2>
          </div>
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
                <div className="w-full lg:w-1/2 relative">
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/images/introduction/IntroductionThree/bg.png"
                      alt="background"
                      className="w-full h-full object-cover opacity-30"
                    />
                  </div>
                  <div className="relative z-10 p-8 md:p-12">
                    <div className="aspect-square relative">
                      <img
                        src={treatment.imageUrl}
                        alt={treatment.name}
                        className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`w-full lg:w-1/2 p-8 md:p-12 ${
                    index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"
                  }`}
                >
                  <div className="space-y-6">
                    <div className="text-4xl font-bold text-red-400">
                      0{treatment.id}.
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {treatment.name}
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                      {treatment.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">
                          Menu
                        </h3>
                        <ul className="space-y-3">
                          {getMenus(treatment.menu).map((item, menuIndex) => (
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

                    <a
                      href={`https://wa.me/+6285793869960?text=Halo, saya tertarik untuk menggunakan jasa treatment ${treatment.name}. Mohon informasi lebih lanjut.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 bg-red-500 hover:bg-red-600 
           text-white font-semibold rounded-full transition-colors 
           duration-200 transform hover:scale-105"
                    >
                      {treatment.btn || "Hubungi Kami Via WhatsApp"}
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
