import Link from "next/link";
import { LuSearch } from "react-icons/lu";
import Button from "../button/Button";


const Navbar = () => {
    return (
        <div className="border-b-2 border-5 py-5 ">
            
            <div className="hidden lg:flex justify-between items-center ">
            <div className=" ">
                 <Link href="/" className="font-bold text-2xl text-bluePrimary  hover:text-black duration-300 delay-300 transition-all ">NFters</Link>
               </div>
               <div className="">
                  <ul className="space-x-6 ">
                    <li className="inline-block  font-bold text-md hover:text-bluePrimary duration-300 delay-300 transition-all">
                        <Link href="/">Marketplace</Link>
                    </li>
                    <li className="inline-block font-bold text-xmd hover:text-bluePrimary duration-300 delay-300 transition-all">
                        <Link href="/">Resource</Link>
                    </li>
                    <li className="inline-block font-bold text-md hover:text-bluePrimary duration-300 delay-300 transition-all">
                        <Link href="/">About</Link>
                    </li>
                  </ul>
               </div>
               <div className=" flex items-center space-x-3">
                <div className="relative">
                    <input type="text" placeholder="Search" className=" border-graySecondary rounded-full text-grayPrimary pl-5 outline-none py-2 border-2 "/>
                    <button className="absolute top-3 right-5 text-grayPrimary"><LuSearch /></button>
                </div>
                <Button title="Upload"/>
                <button className="bg-transparent text-bluePrimary rounded-full px-8 py-2 border-2 border-bluePrimary hover:bg-bluePrimary hover:text-white transition-all ease-in duration-75 text-md">Connect Wallet</button>
               </div>

            </div>
        </div>
    );
};

export default Navbar;