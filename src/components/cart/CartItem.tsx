import {StyleSheet, View, Image, Pressable} from "react-native";
import {Colors} from "../../styles/colors";
import {s, vs} from "react-native-size-matters";
import AppText from "../texts/AppText";
import {fonts} from "../../styles/fonts";
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import {FC} from "react";

interface CartItemProps {
    title: string;
    price: number | string;
    imageURL: string;
    quantity: number;
    onDeletePress: () => void;
    onIncreasePress: () => void;
    onReducePress: () => void;
}

const CartItem: FC<CartItemProps> = ({
                                         title,
                                         price,
                                         imageURL,
                                         quantity,
                                         onDeletePress,
                                         onIncreasePress,
                                         onReducePress
                                     }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: imageURL}} style={styles.image}/>
            </View>

            <View style={styles.detailsContainer}>
                <AppText style={styles.textTitle}>{title}</AppText>
                <AppText style={styles.textPrice}>{price}</AppText>

                <View style={styles.quantityContainer}>
                    <Pressable style={styles.iconButton} onPress={onIncreasePress}>
                        <FontAwesome name="plus" size={s(10)} color={Colors.primary}/>
                    </Pressable>
                    <AppText style={styles.textQuantity}>{quantity}</AppText>
                    <Pressable style={styles.iconButton} onPress={onReducePress}>
                        <FontAwesome name="minus" size={s(10)} color={Colors.primary}/>
                    </Pressable>
                </View>
            </View>

            <View style={styles.deleteContainer}>
                <Pressable style={styles.deleteButton} onPress={onDeletePress}>
                    <AntDesign name="delete" size={s(16)} color={Colors.red}/>
                </Pressable>
            </View>
        </View>
    );
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        paddingBottom: vs(4),
        borderColor: Colors.blueGray
    },
    imageContainer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsContainer: {
        flex: 3.5,
    },
    deleteContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        height: s(80),
        width: s(80),
        borderRadius: s(5)
    },
    textTitle: {
        fontSize: s(14),
        color: Colors.primary,
        fontFamily: fonts.Medium,
        marginTop: vs(5)
    },
    textPrice: {
        fontSize: s(16),
        color: Colors.primary,
        fontFamily: fonts.Bold,
        marginVertical: vs(5)
    },
    deleteButton: {
        alignItems: 'center',
    },
    quantityContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: s(5),
        borderRadius: s(30),
        borderWidth: s(1),
        borderColor: Colors.blueGray,
        width: s(80),
        paddingVertical: vs(5)
    },
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightGray,
        padding: s(5),
        height: s(20),
        width: s(20),
        borderRadius: s(10)
    },
    textQuantity: {
        flex: 1,
        textAlign: 'center',
        color: Colors.primary,
    }
})