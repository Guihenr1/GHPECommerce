import {StyleSheet, View, Image} from "react-native";
import {IMAGE_PATHS} from "../../constants/image-paths";
import {Colors} from "../../styles/colors";
import {vs} from "react-native-size-matters";

const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <Image source={IMAGE_PATHS.logo} style={styles.logo}/>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: vs(10)
    },
    logo: {
        height: vs(40),
        width: vs(40),
        tintColor: Colors.white
    }
})