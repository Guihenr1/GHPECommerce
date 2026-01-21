import {StyleSheet, Image} from "react-native";
import AppSaveView from "../../components/views/AppSaveView";
import {sharedPaddingHorizontal} from "../../styles/sharedStyles";
import {IMAGE_PATHS} from "../../constants/image-paths";
import {s, vs} from "react-native-size-matters";
import AppTextInput from "../../components/inputs/AppTextInput";
import React, {useState} from "react";
import AppButton from "../../components/buttons/AppButton";
import {Colors} from "../../styles/colors";
import {useNavigation} from "@react-navigation/native";

const SignUpScreen = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    return (
        <AppSaveView style={styles.container}>
            <Image source={IMAGE_PATHS.logo} style={styles.logo}/>
            <AppTextInput placeholder="Username" onChangeText={setUserName}/>
            <AppTextInput placeholder="Email" onChangeText={setEmail}/>
            <AppTextInput placeholder="Passworld" onChangeText={setPassword} secureTextEntry/>
            <AppButton title="Create New User" style={styles.createNewUser}/>
            <AppButton title="Return to Sign In" style={styles.return} textColor={Colors.primary}
                       onPress={() => navigation.navigate("SignInScreen")}/>
        </AppSaveView>
    );
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: sharedPaddingHorizontal,
        paddingTop: vs(50)
    },
    logo: {
        height: s(150),
        width: s(150),
        marginBottom: vs(30)
    },
    return: {
        backgroundColor: Colors.white,
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: Colors.primary
    },
    createNewUser: {
        marginTop: vs(30)
    }
})