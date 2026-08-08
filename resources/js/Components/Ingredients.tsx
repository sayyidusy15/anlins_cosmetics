import { Link } from "@inertiajs/react";

export type IngredientItem = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

interface IngredientsProps {
  data: IngredientItem[];
}

export default function Ingredients({ data }: IngredientsProps) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="introduction-six">
      <div className="container">
        <div className="section-title -center mb-[1.875em]">
          <h2>Kenali bahan produk kami</h2>
          <Link href="/ingredient" className="btn -white">
            Lihat semua
          </Link>
        </div>

        <div className="introduction-six__wrapper">
          <div className="row">
            {data.slice(0, 3).map((ingredient, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="introduction-six__wrapper__item">
                  <div className="introduction-six__wrapper__item__image">
                    <img
                      src={ingredient.imageUrl}
                      alt={ingredient.name}
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
          </div>
        </div>
      </div>
    </div>
  );
}
