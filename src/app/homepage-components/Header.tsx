import Image from "next/image";
import logo from "../../assets/logo.png"
import { FaAngleDown, FaSearch } from "react-icons/fa";

export default function Header() {
    return (
      <header className="bg-white text-blue-800 p-4">
        <nav className="container mx-auto flex  items-center space-x-6 lg:justify-center items-start">
          <Image src={logo} alt="" className="h-10 w-10" />
          <ul className="lg:flex space-x-4 text-sm font-semibold items-center hidden ">
            <li><a href="#" className="hover:underline flex items-center">ABOUT US <FaAngleDown/> </a></li>
            <li><a href="#" className="hover:underline flex items-center">PROGRAM <FaAngleDown/></a></li>
            <li><a href="#" className="hover:underline ">ADDMISSIONS</a></li>
            <li><a href="#" className="hover:underline flex items-center">HAPPENINGS <FaAngleDown/></a></li>
            <li><a href="#" className="hover:underline ">BLOG</a></li>
            <li><a href="#" className="hover:underline ">CONTACT</a></li>
            <li><a href="#" className="hover:underline ">STUDENT LOGIN</a></li>
             <li className=" font-normal" style={{color:"#F6851E"}}><FaSearch/></li>{/*Search icon */}
            

          </ul>
        </nav>
      </header>
    );
  }