import Image from "next/image";

// Static data for cards
const cardData = [
  {
    id: 1,
    title: "Future-Ready Working Professionals",
    description:
      "Upskill yourself with flexible and effective learning programs designed for career growth without interrupting your job.",
    bgColor: "bg-orange-100",
  },
  {
    id: 2,
    title: "Empowering Fresh Graduates",
    description:
      "Boost your employability with affordable, peer-supported, and experiential learning that complements your academic knowledge.",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    title: "Supporting Ambitious Entrepreneurs",
    description:
      "Leverage practical and flexible learning to accelerate your startup's growth through real-world case studies and peer networks.",
    bgColor: "bg-white",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-200 flex items-center justify-center">
      <div className="container w-full mx-auto px-6 py-16">
        {/* "For Whom" Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          For Whom
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:px-4 lg:px-10">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`relative shadow-lg rounded-lg p-6 ${card.bgColor}`}
            >
              {/* Content */}
              <div className="ml-6">
                <h3 className="text font-bold text-gray-800 text-left">
                  {card.title}
                </h3>
                <p className="text-gray-600 font-medium text-sm text-left mt-2">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
