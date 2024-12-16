import Image from "next/image";
import React from "react";
import student1 from "../../assets/student1.png"
import student2 from "../../assets/student2.png"
import student3 from "../../assets/student3.png"
import student4 from "../../assets/student4.png"
import { FaAngleDoubleRight } from "react-icons/fa";


const StudentsList = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className=" container  mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-950">
          Listen to Our Students
        </h2>
        <p className="text-center text-gray-600 mb-4 text-sm">
          In a world governed by the need to grow, upskilling adds value to your persona and company's effectiveness. ICFAI Online MBA is flexible to achieve a real work- study balance. But there are more reasons why ICFAI Online MBA might be the best option. Listen to what our students tell about it:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between sm:px-4">
          <div>
            <Image src={student1} alt="" />
          </div>
          <div>
            <Image src={student2} alt="" />
          </div>
          <div>
            <Image src={student3} alt="" />
          </div>
          <div>
            <Image src={student4} alt="" />
          </div>
        </div>
        <div>
          <button className="flex items-center text-white p-2 rounded-lg mx-auto mt-4" style={{ backgroundColor: "#F6851E" }}>More Students Testimonials <FaAngleDoubleRight className='ml-2' /></button>

        </div>
      </div>
    </section>
  );
};

export default StudentsList;
