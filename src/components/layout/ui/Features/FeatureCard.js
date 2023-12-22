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
    title: "Amazing Collection",
    author: "by Arkhan",
    authorImg: person1,
  },
  {
    id: 2,
    img1: img2,
    img2: img4,
    img3: img8,
    img4: img6,
    title: "Amazing Collection",
    author: "by Arkhan",
    authorImg: person1,
  },
  {
    id: 3,
    img1: img2,
    img2: img4,
    img3: img8,
    img4: img6,
    title: "Amazing Collection",
    author: "by Arkhan",
    authorImg: person1,
  },
];

const FeatureCard = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-5">
      {data?.map((item) => (
        <div key={item?.id} >
          <div className="space-y-5">
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <Image
                  src={item?.img1}
                  alt="img"
                  width={500}
                  height={100}
                  className="h-full w-full"
                />
              </div>
              <div className="space-y-3">
                <Image
                  src={item?.img2}
                  alt="img"
                  width={100}
                  height={100}
                  className=""
                />
                <Image
                  src={item?.img3}
                  alt="img"
                  width={100}
                  height={100}
                  className=""
                />
                <Image
                  src={item?.img4}
                  alt="img"
                  width={100}
                  height={100}
                  className=""
                />
              </div>
            </div>
            <div className="space-y-5">
              <h2 className="text-xl font-bold">{item?.title}</h2>
              <div className="flex justify-between items-center">
                <div className="flex  items-center">
                <Image src={item?.authorImg} alt='img' width={50} height={50} className=''/>
                <h2 className="text-xl font-bold">{item?.author}</h2>
                </div>
               <div>
               <PrimaryButton title="Total 54 Items"/>
               </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
