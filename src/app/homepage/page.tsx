import Nav from './navbar'
import Banner from './banner';
import Hero from './hero';
import AboutUs from './aboutus';
import ProgramsOffered from './programs';
import App from './app';
import Wherework from './work'
import TestimonialSection from './testomonials';
import Getintouch from './getintouch';
import AccreditationsSection from '../homepage-components/AccreditationsSection.';


export default function Home() {
  return (
    <div>
        <Nav />
        <Banner />
        <Hero/>
        <AboutUs/>
        <ProgramsOffered/>
        <Wherework/>    
        <App/>
        <TestimonialSection/>
        <Getintouch/>
        <AccreditationsSection/>
  
      
    </div>
  );
}
