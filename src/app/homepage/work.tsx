import Image from "next/image"
import capgemini from "../../assets/Capgemini.png"
import cognizant from "../../assets/Cognizant.png"
import cisco from "../../assets/Cisco.png"
import dell from "../../assets/Dell.png"
import deloitte from "../../assets/Deloitte.png"
import gail from "../../assets/Gail.png"

const companies = [
  { name: "Capgemini", logo: capgemini },
  { name: "Cognizant", logo: cognizant },
  { name: "Cisco", logo: cisco },
  { name: "Dell Technologies", logo: dell },
  { name: "Deloitte", logo: deloitte },
  { name: "GAIL (India) Limited", logo: gail },
]

const AlumniWork = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50" aria-labelledby="alumni-work-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          id="alumni-work-heading" 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 text-center mb-8 sm:mb-12"
        >
          Where Do Our Students/Alumni Work?
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
          {companies.map((company) => (
            <li key={company.name} className="flex items-center justify-center">
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                width={150}
                height={100}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain"
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AlumniWork;

