import Button from "@/components/button/Button";
import GrayButton from "@/components/button/GrayButton";
import PrimaryButton from "@/components/button/PrimaryButton";
import { IoFilterSharp } from "react-icons/io5";

const FilterButton = () => {
  return (
    <div className="lg:flex justify-between items-center ">
      <div className="lg:flex flex-wrap space-x-3 gap-3">
        <Button title="All Categories" />

        <GrayButton title="Art" />
        <GrayButton title="Celebrities" />
        <GrayButton title="Gaming" />
        <GrayButton title="Sport" />
        <GrayButton title="Music" />
        <GrayButton title="Crypto" />
      </div>
      <div>
        <button className="bg-gray-100  text-bluePrimary rounded-full px-8 py-2  hover:bg-bluePrimary hover:text-white transition-all ease-in duration-75 text-md flex items-center">
          <IoFilterSharp className="mr-2 " /> All Categories
        </button>
      </div>
    </div>
  );
};

export default FilterButton;
