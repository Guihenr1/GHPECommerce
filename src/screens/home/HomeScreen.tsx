import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import AppText from "../../components/texts/AppText";

const HomeScreen = () => {
    return (
        <AppSaveView>
            <HomeHeader />
            <AppText>Home Screen</AppText>
            <AppText variant="bold" >Home Screen</AppText>
        </AppSaveView>
    )
}

export default HomeScreen