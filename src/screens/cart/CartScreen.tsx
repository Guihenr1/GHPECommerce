import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import EmptyCart from "./EmptyCart";

const CartScreen = () => {
    return (
        <AppSaveView>
            <HomeHeader />
            <EmptyCart />
        </AppSaveView>
    )
}

export default CartScreen