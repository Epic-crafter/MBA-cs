import Image from "next/image";
import whychoose from "../../assets/scholer.jpg";
import Mastery from "../../assets/Mastery.png";
import Innovation from "../../assets/Innovation.png";
import Freedom from "../../assets/Freedom.png";
import Belonging from "../../assets/belonging.png";
import { FaAngleDoubleRight } from "react-icons/fa";
export default function WhyChoose() {
  return (
    <section className="py-12 bg-white px-8">
      <div className="container lg:flex grid  grid-cols-1 mx-auto justify-between gap-8 lg:w-[80%] ">
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold mb-4 text-blue-950">
            Why is Online MBA & PGDM Unique?
          </h2>
          <div className="text-gray-600 mb-8 ">
            <p className="mb-2 ">
              The Online MBA & PGDM program seamlessly integrates your personal
              aspirations, professional context, business challenges,
              institutional insights, and learning journey.
            </p>
            <p>
              This program unlocks countless opportunities for growth and
              success. You can shape your learning outcomes by leveraging four
              key drivers tailored to your unique goals and aspirations.
            </p>
          </div>
          <div className="grid px-10 lg:grid-cols-4 grid-cols-2 gap-3 mb-6">
            <Image className="shadow" src={Mastery} alt="" />
            <Image src={Innovation} alt="" />
            <Image src={Freedom} alt="" />
            <Image src={Belonging} alt="" />
          </div>
          <div className="flex">
            <button
              className="flex items-center text-white p-2 rounded-lg mx-auto"
              style={{ backgroundColor: "#F6851E" }}
            >
              More About The Program <FaAngleDoubleRight className="ml-2" />
            </button>
          </div>
        </div>
        <div className="lg:w-1/3 mx-auto">
          <Image
            src={whychoose}
            className=" aspect-square object-cover rounded-full "
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
