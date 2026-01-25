import AppText from "../texts/AppText";
import {StyleSheet, View} from "react-native";
import AppSaveView from "../views/AppSaveView";
import {commonStyles, sharedPaddingHorizontal} from "../../styles/sharedStyles";
import {s, vs} from "react-native-size-matters";
import {Colors} from "../../styles/colors";
import AppTextInput from "../inputs/AppTextInput";
import AppButton from "../buttons/AppButton";
import {IS_ANDROID, IS_IOS} from "../../constants/constants";

const Checkout = () => {
    return (
        <AppSaveView>
            <View style={{paddingHorizontal: sharedPaddingHorizontal}}>
            <View style={styles.inputContainer}>
                <AppTextInput placeholder="Full Name" />
                <AppTextInput placeholder="Phone Number" />
                <AppTextInput placeholder="Detailed Address" />
            </View>
            </View>

            <View style={styles.bottomButtonContainer}>
                <AppButton title="Proceed to Payment" />
            </View>
        </AppSaveView>
    )
}

export default Checkout

const styles = StyleSheet.create({
    inputContainer: {
        ...commonStyles.shadow,
        padding: s(8),
        borderRadius: s(8),
        backgroundColor: Colors.white,
        marginTop: IS_IOS ? 0 : undefined,
        paddingTop: vs(15)
    },
    bottomButtonContainer: {
        paddingHorizontal: sharedPaddingHorizontal,
        position: 'absolute',
        width: '100%',
        bottom: IS_ANDROID ? vs(15) : 0,
        borderTopWidth: 1,
        borderColor: Colors.lightGray,
        paddingTop: vs(10)
    }
})