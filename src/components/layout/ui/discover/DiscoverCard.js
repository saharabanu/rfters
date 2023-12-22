import Image from 'next/image';
import img1 from '../../../../assets/images/discover/image-1.png';
import person1 from '../../../../assets/images/discover/Ellipse-1.png';
import person2 from '../../../../assets/images/discover/Ellipse-2.png';
import person3 from '../../../../assets/images/discover/Ellipse-3.png';
import person4 from '../../../../assets/images/discover/Ellipse-4.png';
import GrayButton from '@/components/button/GrayButton';
import CardButton from '@/components/button/CardButton';


const data = [
    {
        id:1,
        img:img1,
        title:"KingCrypto",
        timing:"3h 50m 2s left",
        count:"1 of 321",
        percent:"0.25 ETH",
        person1:person1,
        person2:person2,
        person3:person3,
        person4:person4,


    },
    {
        id:2,
        img:img1,
        title:"KingCrypto",
        timing:"3h 50m 2s left",
        count:"1 of 321",
        percent:"0.25 ETH",
        person1:person1,
        person2:person2,
        person3:person3,
        person4:person4,


    },
    {
        id:3,
        img:img1,
        title:"KingCrypto",
        timing:"3h 50m 2s left",
        count:"1 of 321",
        percent:"0.25 ETH",
        person1:person1,
        person2:person2,
        person3:person3,
        person4:person4,


    },
    {
        id:4,
        img:img1,
        title:"KingCrypto",
        timing:"3h 50m 2s left",
        count:"1 of 321",
        percent:"0.25 ETH",
        person1:person1,
        person2:person2,
        person3:person3,
        person4:person4,


    }
]

const DiscoverCard = () => {
    return (
        <div className='grid lg:grid-cols-4 gap-4'>
            {data?.map((item) => <div key={item?.id}>

              <div className='bg-white rounded-lg p-2 shadow-md'>
                <div className='relative'>
                    <Image src={item?.img} alt='img' width={300} height={100} className=''/>
                    <div className='flex absolute bottom-[-18px] left-4'>
                    <Image src={item?.person1} alt='img' width={50} height={50} /> 
                    <Image src={item?.person2} alt='img' width={50} height={50} className='ml-[-30px]'/> 
                    <Image src={item?.person3} alt='img' width={50} height={50} className='ml-[-30px]'/> 
                    <Image src={item?.person4} alt='img' width={50} height={50} className='ml-[-30px]'/> 
                    </div>
                </div>
                <div className=' space-y-5 text-xl font-bold px-4'>
                    <h2 className=' pt-8 '>
                           {item?.title}
                    </h2>
                   <div className='flex justify-between items-center'>
                   <h5 className='text-green-600'>{item?.percent}</h5>
                   <h5 className='text-gray-600 '>{item?.count}</h5>
                   </div>
                   <hr/>

                   <div className='flex items-center justify-between'>
                        
                    <CardButton title={item?.timing}/>
                          
                          <h2 className='text-bluePrimary text-sm'>Place a bid</h2>

                            
                          
                   </div>

                </div>

              </div>

            </div>)}
           
        </div>
    );
};

export default DiscoverCard;