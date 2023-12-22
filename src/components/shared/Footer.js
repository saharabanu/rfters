/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

import { LuSearch } from "react-icons/lu";

const Footer = () => {
  return (
    <div>
      

     
      <footer className=" bg-blueGray-200 pt-8 pb-6">

        <div className=" grid lg:grid-cols-3 gap-10 container mx-auto px-10" >
        <div className=" space-y-5">
              <Link href="/"><h4 className="text-3xl font-bold text-blueGray-700 hover:text-bluePrimary transition-all duration-150 delay-150 ease-in-out">
                NFTERS
              </h4></Link>
              <h6 className="text-md   text-blueGray-600">
              The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
              </h6>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-blueSecondary text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:bg-bluePrimary"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-cyanSecondary text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-lightBlue text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </button>
               
              </div>
            </div>





                <div className="grid lg:grid-cols-2">
                <div className="">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-6">
                  Market Place
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        All NFTs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        New
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Art
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Utility
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Music
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Domain Name
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-6">
                  My Account
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Favorite
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        My Collections
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                       Settings
                      </Link>
                    </li>
                  </ul>
                </div>
                </div>
            
            
                <div className=" space-y-5">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-6">
                   Stay In The Loop
                  </span>
                   <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>

                   <div className="relative">
                    <input type="text" placeholder="Enter Your Email Address" className=" border-graySecondary rounded-full text-grayPrimary pl-5 outline-none py-3 border-2 w-full"/>
                    <button className="absolute top-2 right-1 bg-bluePrimary text-white px-4 rounded-full py-2 bottom-2">Subscribe Now</button>
                </div>
                </div>
                </div>
          






          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2023</span>
                <Link
                  href="/"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  {" "}
                  Sahara
                </Link>
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        
      </footer>
    </div>
  );
};

export default Footer;
