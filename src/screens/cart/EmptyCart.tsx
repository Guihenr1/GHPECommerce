import {StyleSheet, View} from "react-native";
import {s, vs} from "react-native-size-matters";
import AppText from "../../components/texts/AppText";
import {fonts} from "../../styles/fonts";
import {Colors} from "../../styles/colors";
import AppButton from "../../components/buttons/AppButton";
import {useNavigation} from "@react-navigation/native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const EmptyCart = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="shopping-outline" size={s(100)} color={Colors.primary} style={styles.icon}/>
            <AppText style={styles.title}>Your cart is empty</AppText>
            <AppText style={styles.subtitle}>Go shopping!</AppText>
            <AppButton title="Start Shopping" style={styles.button} onPress={() => navigation.navigate("Home")} />
        </View>
    )
}

export default EmptyCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: s(20)
    },
    title: {
        fontSize: s(20),
        fontFamily: fonts.Bold,
        color: Colors.primary,
        marginBottom: vs(10)
    },
    subtitle: {
        fontSize: s(16),
        fontFamily: fonts.Medium,
        color: Colors.medGray,
        textAlign: 'center',
        marginBottom: vs(20)
    },
    button: {
        width: '80%',
    },
    icon: {
        marginBottom: vs(20),
        opacity: .9
    }
})