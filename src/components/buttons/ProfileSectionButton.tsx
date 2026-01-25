import {StyleSheet, TouchableOpacity, View} from "react-native";
import AppText from "../texts/AppText";
import {Colors} from "../../styles/colors";
import {s, vs} from "react-native-size-matters";
import {fonts} from "../../styles/fonts";
import {MaterialIcons} from "@expo/vector-icons";
import {FC} from "react";

interface ProfileSectionButtonProps {
    onPress: () => void;
    title: string;
}

const ProfileSectionButton : FC<ProfileSectionButtonProps> = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.textContainer}>
                <AppText style={styles.textTitle}>{title}</AppText>
            </View>

            <View>
                <MaterialIcons name="chevron-right" size={s(20)} color={Colors.medGray}/>
            </View>
        </TouchableOpacity>
    )
}

export default ProfileSectionButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomColor: Colors.lightGray,
        paddingBottom: vs(10),
        marginTop: vs(14),
        flexDirection: 'row',
        borderBottomWidth: 1,
    },
    textTitle: {
        fontSize: s(16),
        fontFamily: fonts.Medium,
        color: Colors.primary,
    },
    textContainer: {
        flex: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: s(8)
    }
})