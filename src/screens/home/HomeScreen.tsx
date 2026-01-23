import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProductCard from "../../components/cards/ProductCard";
import {FlatList} from "react-native";
import {products} from "../../data/products";
import {s, vs} from "react-native-size-matters";

const HomeScreen = () => {
    return (
        <AppSaveView>
            <HomeHeader/>
            <FlatList numColumns={2}
                      data={products}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({item}) =>
                          <ProductCard imageUrl={item.imageURL}
                                       title={item.title}
                                       price={item.price}
                                       onAddToCartPress={() => {
                                       }}/>
                      }
                      columnWrapperStyle={{
                          justifyContent: "space-between",
                          marginBottom: vs(10)
                      }}
                      contentContainerStyle={{
                          paddingHorizontal: s(10)
                      }}
            />
        </AppSaveView>
    )
}

export default HomeScreen