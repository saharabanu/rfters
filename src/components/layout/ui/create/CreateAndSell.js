import Button from "@/components/button/Button";
import Image from "next/image";
import img1 from '../../../../assets/images/discover/image-1.png';
import img3 from '../../../../assets/images/discover/image-3.png';
import img4 from '../../../../assets/images/discover/image-4.png';
import person1 from '../../../../assets/images/discover/Ellipse-1.png';

const CreateAndSell = () => {
  return (
    <div className="container mx-auto px-10 py-20">
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="grid lg:grid-cols-2 gap-5 ">
         <div>
         <div className="relative">
            <Image
              src={img1}
              alt="img"
              width={300}
              height={100}
              className=""
            />
            <div className=" absolute bottom-[-13px] right-[-12px]">
              <Image src={person1} alt="img" width={50} height={50} />
             
             
            </div>
          </div>
        <div className="flex justify-end items-center mt-5">
        <div className="relative">
            <Image
              src={img3}
              alt="img"
              width={200}
              height={100}
              className=""
            />
            <div className=" absolute bottom-[-13px] right-[-12px]">
              <Image src={person1} alt="img" width={50} height={50} />
             
             
            </div>
          </div>
        </div>
         </div>
           <div className="flex justify-center items-center">
           <div className="relative">
            <Image
              src={img4}
              alt="img"
              width={250}
              height={200}
              className=""
            />
            <div className=" absolute bottom-[-13px] right-[-12px]">
              <Image src={person1} alt="img" width={50} height={50} />
             
             
            </div>
          </div>
           </div>
        </div>
       <div className="flex justify-center items-center">
       <div className="space-y-4">
          <h2 className="text-3xl font-black uppercase">Create and  <br/> sell your NFTs</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </p>
          <Button title="Sign Up Now" />
        </div>
       </div>
      </div>
    </div>
  );
};

export default CreateAndSell;
