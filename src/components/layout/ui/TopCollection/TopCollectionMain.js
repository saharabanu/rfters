import React from 'react';
import CollectionPart1 from './CollectionPart1';
import CollectionPart2 from './CollectionPart2';
import CollectionPart3 from './CollectionPart3';




const TopCollectionMain = () => {
    return (
        <div className='container mx-auto px-10 py-24'>
            
            <div className='grid lg:grid-cols-3 gap-10'>

                <div>
                    <CollectionPart1/>
                </div>
                <div>
                    <CollectionPart2/>
                </div>
                <div className='border border-l-2 border-b-0 border-e-0 border-t-0'>
                    <CollectionPart3/>
                </div>

            </div>
            
        </div>
    );
};

export default TopCollectionMain;