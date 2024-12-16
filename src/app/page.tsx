// import Image from "next/image";
// import Header from "./homepage-components/Header";

import AccreditationsSection from "./homepage-components/AccreditationsSection.";
import AlumniWork from "./homepage-components/AlumniWork";
import Footer from "./homepage-components/Footer";
import ForWhom from "./homepage-components/ForWhom";
import Header from "./homepage-components/Header";
import Header2 from "./homepage-components/Header2";
import HeroSection from "./homepage-components/HeroSection";
import WhyChoose from "./homepage-components/WhyChoose";
import WhyMBA from "./homepage-components/WhyMBA";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

//      <Header/>
     
//     </div>
//   );
// }
// pages/index.js


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Header />
      <main className="flex-grow">
        <Header2/>
        <HeroSection />
        <WhyChoose />  
        <ForWhom/>
        <AlumniWork/>
        {/* <StudentsList/> */}
        <WhyMBA/>
        <AccreditationsSection/>
      </main>
      <Footer />
    </div>
  );
}
