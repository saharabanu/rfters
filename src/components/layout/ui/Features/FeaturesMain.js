import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesMain = () => {
    return (
        <div className='bg-gray-50 py-10'>
           <div className='container mx-auto px-10'>
           <h2 className="text-3xl font-black uppercase pb-7">Collection Featured NFTs</h2>
           <FeatureCard/>
           </div>
        </div>
    );
};

export default FeaturesMain;