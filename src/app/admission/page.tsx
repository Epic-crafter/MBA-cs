import Hero from './hero';
import Banner from '../homepage/banner';
import Admissionprocess from './admissionprocess';
import Ad from './ad';
import Hero2 from './hero2';
import Faq from '../courses/faq'



export default function Home() {
  return (
    <div>
        <Banner />
        <Hero />
        <Admissionprocess/>
        <Ad/>
        <Hero2/>
        <Faq/>
        
      
    </div>
  );
}
