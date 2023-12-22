
import DiscoverCard from "./DiscoverCard";
import FilterButton from "./FilterButton";
import PrimaryButton from "@/components/button/PrimaryButton";


const DiscoverMain = () => {
    return (
        <div className="bg-gray-50 py-10">
           <div className="container mx-auto px-10 space-y-6">
           <h2 className="text-3xl font-black uppercase">Discover more NFTs</h2>
            <FilterButton/>
            <DiscoverCard/>
            <div className="flex justify-center items-center py-4">
                <PrimaryButton title="More Info"/>
            </div>
           </div>
        </div>
    );
};

export default DiscoverMain;