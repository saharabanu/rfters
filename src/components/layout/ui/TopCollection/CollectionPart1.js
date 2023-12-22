import img2 from "../../../../assets/images/discover/image-2.png";
import img4 from "../../../../assets/images/discover/image-4.png";
import img8 from "../../../../assets/images/discover/image-8.png";
import img6 from "../../../../assets/images/discover/image-6.png";
import person1 from "../../../../assets/images/discover/persion1.png";
import Image from "next/image";
import PrimaryButton from "@/components/button/PrimaryButton";


const data = [
    {
      id: 1,
      img1: img2,
      img2: img4,
      img3: img8,
      img4: img6,
      title: "The Futr Abstr",
      authorImg: person1,
      highest:'Highest Bid',
      count:"0.25 ETH",
      stock:"10 in the stock"
    }

  ];

const CollectionPart1 = () => {
    return (
        <div className="grid lg:grid-cols-1 gap-5">
        {data?.map((item) => (
          <div key={item?.id} >
            <div className="space-y-5">
              
                <div className="">
                  <Image
                    src={item?.img1}
                    alt="img"
                    width={400}
                    height={100}
                    className=""
                  />
                </div>
               
             
              <div className="space-y-5">
                
                <div className="flex justify-between items-center">
                  <div className="flex   items-center">
                  <Image src={item?.authorImg} alt='img' width={50} height={50} className=''/>
                  <div>
                  <h2 className="text-xl font-bold">{item?.title}</h2>
                  <p className="text-sm">{item?.stock}</p>
                  </div>
                  </div>
                  <div className="pl-24">
                  <h2 className="text-sm ">{item?.highest}</h2>
                  <p className="text-xl font-bold">{item?.count}</p>
                  </div>
                 <div>
                
                 </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default CollectionPart1;