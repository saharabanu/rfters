import img2 from "../../../../assets/images/discover/person2.png";
import img4 from "../../../../assets/images/discover/person3.png";
import img8 from "../../../../assets/images/discover/person4.png";
import img6 from "../../../../assets/images/discover/person5.png";
import img3 from "../../../../assets/images/discover/person5.png";

import Image from "next/image";
import PrimaryButton from "@/components/button/PrimaryButton";

const data = [
  {
    id: 1,
    img1: img2,
    title: "CryptoFunks",
      count: "+26.52%",
    percent: "19,769.39",
  },
  {
    id: 2,
    img1: img4,
    title: "Cryptix",
      count: "+26.52%",
    percent: "19,769.39",
  },
  {
    id: 3,
    img1: img8,
    title: "Frensware",
      count: "+26.52%",
    percent: "19,769.39",
  },
  {
    id: 4,
    img1: img6,
    title: "PunkArt",
      count: "+26.52%",
    percent: "19,769.39",
  },
  {
    id: 5,
    img1: img2,
    title: "Art Crypto",
      count: "+26.52%",
    percent: "19,769.39",
  },
];

const CollectionPart3 = () => {
  return (
    <div className=" space-y-3">

        <div className="pl-5">
        <h2 className="text-lg font-black ">Top Collections over </h2>
        <p className="text-bluePrimary">Last 7 days</p>
        </div>
      {data?.map((item, index) => (
        <div key={item?.id} className=" border-b-2 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h5 className="font-bold text-md pr-5 pl-2">{index}</h5>
              <Image
                src={item?.img1}
                alt="img"
                width={50}
                height={50}
                className=""
              />
            </div>
            <div className="flex items-start">
              <div className="text-left">
                <h2 className="text-lg font-bold ">{item?.title}</h2>
                <p className="text-sm">{item?.percent}</p>
              </div>
            </div>
            <div>
            <h2 className="text-lg font-bold  text-green-500 hover:text-red-500">{item?.count}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionPart3;
