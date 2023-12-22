import Button from "@/components/button/Button";
import React from "react";
import Image from 'next/image';
import img1 from '../../../../assets/images/discover/image-1.png';
import img2 from '../../../../assets/images/discover/image-2.png';
import img3 from '../../../../assets/images/discover/image-3.png';

const MainBanner = () => {
  return (
    <div className="container mx-auto px-10 py-14">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <div className="space-y-5">
            <h2 className="text-3xl font-black">
              Discover, and collect <br /> Digital Art NFTs{" "}
            </h2>
            <p className="text-gray-500">
              Digital marketplace for crypto collectibles and <br />{" "}
              non-fungible tokens (NFTs). Buy, Sell, and discover <br />
              exclusive digital assets.
            </p>
            <Button title="Explore Now" />
          </div>

          <div className="flex items-center py-10">
            <div>
                <h2 className="text-2xl font-black" >98K+</h2>
                <p>Atwork</p>
            </div>
            <div className="px-5">
                <h2 className="text-2xl font-black" >12K+</h2>
                <p>Auction</p>
            </div>
            <div>
                <h2 className="text-2xl font-black" >15K+</h2>
                <p>Artist</p>
            </div>
          </div>
        </div>
        <div className='relative z-50'>
      <Image src={img1} alt='img' width={500} height={100} className='z-50' />

      <div className='absolute left-20 top-10 z-1'>
        <Image src={img2} alt='img' width={500} height={50} className='z-0' />
      </div>

      <div className='absolute left-36 top-0 z-2'>
        <Image src={img3} alt='img' width={500} height={50} className='z-0' />
      </div>
    </div>
        {/* <div className='relative'>
                    <Image src={img1} alt='img' width={500} height={100} className='z-10'/>
                    <div className=' absolute  left-20 top-10 z-0'>
                    <Image src={img2} alt='img' width={500} height={50}  className="z-0"/> 
                   
                    
                    </div>
                    <div className=' absolute left-36 top-0 z-0'>
                    <Image src={img3} alt='img' width={500} height={50}  className="z-0"/> 
                   
                    
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default MainBanner;
