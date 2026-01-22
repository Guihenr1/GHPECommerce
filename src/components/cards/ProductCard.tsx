import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {s, vs} from "react-native-size-matters";
import {Colors} from "../../styles/colors";
import AppText from "../texts/AppText";
import {fonts} from "../../styles/fonts";
import {Ionicons} from "@expo/vector-icons";
import {commonStyles} from "../../styles/sharedStyles";
import {FC} from "react";

export interface IProductCard {
    onPress: () => void;
    imageUrl: string;
    title: string;
    price: number | string;
}

const ProductCard : FC<IProductCard>  = ({onPress, imageUrl, title, price}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addButton} onPress={onPress}>
                <Ionicons name='cart' size={s(15)} color={Colors.white}/>
            </TouchableOpacity>

            <View style={styles.imageContainer}>
                <Image style={styles.image}
                       source={{uri: imageUrl}}/>
            </View>

            <View style={styles.detailsContainer}>
                <AppText style={styles.titleText}>{title}</AppText>
                <AppText style={styles.priceText}>{price} €</AppText>
            </View>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        width: s(160),
        height: vs(190),
        backgroundColor: Colors.white,
        borderRadius: s(10),
        ...commonStyles.shadow
    },
    imageContainer: {
        overflow: 'hidden',
        borderTopLeftRadius: s(10),
        borderTopRightRadius: s(10),
        height: vs(130),
        width: '100%'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    detailsContainer: {
        flex: 1,
        paddingTop: s(8),
        paddingBottom: vs(15),
        paddingHorizontal: s(10)
    },
    titleText: {
        fontSize: s(14),
        fontFamily: fonts.Medium,
        color: Colors.primary
    },
    priceText: {
        fontSize: s(14),
        color: Colors.primary,
        fontFamily: fonts.Bold,
        marginTop: vs(7)
    },
    addButton: {
        position: 'absolute',
        height: s(28),
        width: s(28),
        left: 5,
        top: 5,
        borderRadius: s(14),
        backgroundColor: Colors.primary,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})