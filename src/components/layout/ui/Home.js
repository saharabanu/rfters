import FeaturesMain from "./Features/FeaturesMain";
import TopCollectionMain from "./TopCollection/TopCollectionMain";
import CreateAndSell from "./create/CreateAndSell";
import DiscoverMain from "./discover/DiscoverMain";


const Home = () => {
    return (
        <div >
            <TopCollectionMain/>
            <FeaturesMain/>
            <CreateAndSell/>
            <DiscoverMain/>
            
        </div>
    );
};

export default Home;