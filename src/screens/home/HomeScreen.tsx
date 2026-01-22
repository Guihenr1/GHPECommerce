import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProductCard from "../../components/cards/ProductCard";

const HomeScreen = () => {
    return (
        <AppSaveView>
            <HomeHeader />
            <ProductCard />
        </AppSaveView>
    )
}

export default HomeScreen