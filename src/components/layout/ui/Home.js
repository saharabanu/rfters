import FeaturesMain from "./Features/FeaturesMain";
import TopCollectionMain from "./TopCollection/TopCollectionMain";
import MainBanner from "./banner/MainBanner";
import CreateAndSell from "./create/CreateAndSell";
import DiscoverMain from "./discover/DiscoverMain";


const Home = () => {
    return (
        <div >
            <MainBanner/>
            <TopCollectionMain/>
            <FeaturesMain/>
            <CreateAndSell/>
            <DiscoverMain/>
            
        </div>
    );
};

export default Home;