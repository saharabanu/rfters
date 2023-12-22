import img2 from "../../../../assets/images/discover/image-2.png";
import img4 from "../../../../assets/images/discover/image-4.png";
import img8 from "../../../../assets/images/discover/image-8.png";
import img6 from "../../../../assets/images/discover/image-6.png";
import person1 from "../../../../assets/images/discover/persion1.png";
import Image from "next/image";
import PrimaryButton from "@/components/button/PrimaryButton";
import Button from "@/components/button/Button";
import icon1 from '../../../../assets/images/discover/img1.png'

const data = [
    {
      id: 1,
      img2: img4,
      img3: img8,
      img4: img6,
      title: "The Futr Abstr",
      authorImg: person1,
      count:"1 of 8",
      percent:"0.25 ETH"
    },
    {
      id: 2,
      img2: img4,
      img3: img8,
      img4: img6,
      title: "The Futr Abstr",
      authorImg: person1,
      count:"1 of 8",
      percent:"0.25 ETH"
    },
    {
      id: 3,
      img2: img4,
      img3: img8,
      img4: img6,
      title: "The Futr Abstr",
      authorImg: person1,
      count:"1 of 8",
      percent:"0.25 ETH"
    },
  ];

const CollectionPart2 = () => {
    return (
        <div className="">
            {data?.map((item)=><div key={item?.id}>
                 <div className="grid grid-cols-2 ">
                     <div className="mb-3">
                     <Image
                  src={item?.img2}
                  alt="img"
                  width={150}
                  height={100}
                  className=""
                />
                     </div>
                     <div className="space-y-1 ">
                        <h2 className="text-md font-semibold">{item?.title}</h2>
                        <div className="flex items-center space-x-1">
                        <Image src={item?.authorImg} alt='img' width={40} height={50} className=''/> 
                        <p className= "border rounded border-green-500 text-green-500 flex items-center"><span>
                        <Image src={icon1} alt='img' width={10} height={10} className=''/> 
                            </span><span className="pl-2">{item?.percent}</span></p>
                        <p className="text-gray-500 ">{item?.count}</p>
                        </div>
                        <Button title="Place a bid"/>

                     </div>
                 </div>
            </div>)}
        </div>
    );
};

export default CollectionPart2;