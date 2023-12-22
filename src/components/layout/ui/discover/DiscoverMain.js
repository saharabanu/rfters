import DiscoverCard from "./DiscoverCard";
import FilterButton from "./FilterButton";


const DiscoverMain = () => {
    return (
        <div className="bg-gray-50 py-10">
           <div className="container mx-auto px-10 space-y-6">
           <h2 className="text-3xl font-bold ">Discover more NFTs</h2>
            <FilterButton/>
            <DiscoverCard/>
           </div>
        </div>
    );
};

export default DiscoverMain;