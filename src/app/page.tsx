import Nav from './homepage/navbar'
import Banner from './homepage/banner';
import Hero from './homepage/hero';
import AboutUs from './homepage/aboutus';
import ProgramsOffered from './homepage/programs';
import App from './homepage/app';
import Wherework from './homepage/work'
import TestimonialSection from './homepage/testomonials';
import Getintouch from './homepage/getintouch';
import AccreditationsSection from './homepage/AccreditationsSection.';


export default function Home() {
  return (
    <div>
        
        <Banner />
        <Hero/>
        <AccreditationsSection/>
        <ProgramsOffered/>
        <AboutUs/>
        <Wherework/>    
        <App/>
        <TestimonialSection/>
        <Getintouch/>
  
      
    </div>
  );
}
