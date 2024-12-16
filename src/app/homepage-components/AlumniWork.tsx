import capgemini from "../../assets/Capgemini.png"
import cognizant from "../../assets/Cognizant.png"
import cisco from "../../assets/Cisco.png"
import dell from "../../assets/Dell.png"
import deloitte from "../../assets/Deloitte.png"
import gail from "../../assets/Gail.png"
import Image from "next/image"
const AlumniWork = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto px-6">

        <div className="text-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-blue-950">
            Where Do Our Students/Alumni Work?
          </h2>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 px-4">
          {/* Logos */}
          <Image
            src={capgemini}
            alt="Capgemini"
            className="h-24 object-contain"
          />
          <Image
            src={cognizant}
            alt="Cognizant"
            className="h-24 object-contain"
          />
          <Image
            src={cisco}
            alt="Cisco"
            className="h-24 object-contain"
          />
          <Image
            src={dell}
            alt="Dell Technologies"
            className="h-24 object-contain"
          />
          <Image
            src={deloitte}
            alt="Deloitte"
            className="h-24 object-contain"
          />
          <Image
            src={gail}
            alt="GAIL (India) Limited"
            className="h-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AlumniWork;
