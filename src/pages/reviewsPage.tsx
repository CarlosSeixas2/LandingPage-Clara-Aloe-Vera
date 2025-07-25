import { useState } from "react";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  photo: string;
}

export default function ReviewsPage() {
  const [reviews] = useState<Review[]>([
    {
      id: 1,
      name: "Maria Silva",
      comment: "Excelente atendimento e produto!",
      rating: 5,
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "João Pereira",
      comment: "Gostei, mas poderia melhorar a entrega.",
      rating: 3,
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Ana Costa",
      comment: "Simplesmente perfeito!",
      rating: 4,
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ]);

  return (
    <section id="depoimentos">
      <div className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Depoimentos de Clientes
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border rounded-xl shadow p-4 flex items-center text-center bg-white"
            >
              <img
                src={review.photo}
                alt={review.name}
                className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
              />
              <div className="text-start ml-4">
                <h2 className="text-xl font-semibold">{review.name}</h2>
                <p className="text-gray-600 mb-2">"{review.comment}"</p>
                <div className="flex gap-1 justify-start">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`w-5 h-5 ${
                        index < review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill={index < review.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
