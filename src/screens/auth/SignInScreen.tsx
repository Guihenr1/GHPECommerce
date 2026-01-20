import {StyleSheet, Image} from "react-native";
import AppSaveView from "../../components/views/AppSaveView";
import {sharedPaddingHorizontal} from "../../styles/sharedStyles";
import {IMAGE_PATHS} from "../../constants/image-paths";
import {s, vs} from "react-native-size-matters";
import AppTextInput from "../../components/inputs/AppTextInput";
import React, {useState} from "react";
import AppButton from "../../components/buttons/AppButton";
import {Colors} from "../../styles/colors";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return(
      <AppSaveView style={styles.container}>
        <Image source={IMAGE_PATHS.logo} style={styles.logo}/>
        <AppTextInput placeholder="Email" onChangeText={setEmail} />
        <AppTextInput placeholder="Passworld" onChangeText={setPassword} secureTextEntry />
        <AppButton title="Login" style={styles.login} />
        <AppButton title="Register" style={styles.register} textColor={Colors.primary} />
      </AppSaveView>
  );
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: sharedPaddingHorizontal
  },
  logo: {
    height: s(150),
    width: s(150),
    marginBottom: vs(30)
  },
  register: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: Colors.primary
  },
  login: {
    marginTop: vs(30)
  }
})