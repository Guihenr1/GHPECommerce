import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";
import {View} from "react-native";
import {sharedPaddingHorizontal} from "../../styles/sharedStyles";
import AppText from "../../components/texts/AppText";
import {s, vs} from "react-native-size-matters";

const ProfileScreen = () => {
    return (
        <AppSaveView>
            <HomeHeader/>
            <AppText variant="bold" style={{fontSize: s(18), marginTop: vs(19)}}>Hello, Gui</AppText>
            <View style={{paddingHorizontal: sharedPaddingHorizontal}}>
                <ProfileSectionButton title="Orders"/>
                <ProfileSectionButton title="Language"/>
                <ProfileSectionButton title="Logout"/>
            </View>
        </AppSaveView>
    )
}

export default ProfileScreen