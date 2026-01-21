import { Text } from "react-native";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";

const HomeScreen = () => {
    return (
        <AppSaveView>
            <HomeHeader />
            <Text>Home Screen</Text>
        </AppSaveView>
    )
}

export default HomeScreen