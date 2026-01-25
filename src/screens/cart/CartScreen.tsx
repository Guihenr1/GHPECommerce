import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import EmptyCart from "./EmptyCart";
import CartItem from "../../components/cart/CartItem";
import TotalViews from "../../components/cart/TotalViews";
import {FlatList, View} from "react-native";
import {sharedPaddingHorizontal} from "../../styles/sharedStyles";
import {products} from "../../data/products";
import AppButton from "../../components/buttons/AppButton";
import {useNavigation} from "@react-navigation/native";

const CartScreen = () => {
    const navigation = useNavigation();

    return (
        <AppSaveView>
            <HomeHeader />
            <View style={{paddingHorizontal: sharedPaddingHorizontal, flex: 1}}>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={(item) => {
                        return <CartItem
                            title={item.item.title}
                            price={item.item.price}
                            imageURL={item.item.imageURL}
                        />
                    }}
                    showsVerticalScrollIndicator={false}
                />

                <TotalViews itemsTotal={100} orderTotal={112}/>
                <AppButton title="Continue" onPress={() => navigation.navigate("Checkout")} />
            </View>
        </AppSaveView>
    )
}

export default CartScreen