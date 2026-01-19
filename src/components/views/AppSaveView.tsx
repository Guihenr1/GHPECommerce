import { StyleSheet, View, ViewStyle} from "react-native";
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {Colors} from "../../styles/colors";
import {FC} from "react";
import React from "react";

interface AppSaveViewProps {
    children: React.ReactNode;
    style: ViewStyle;
}

const AppSaveView: FC<AppSaveViewProps> = ({children, style}) => {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={[styles.container, style, { paddingTop: insets.top }]}>{children}</View>
        </SafeAreaView>
    );
}

export default AppSaveView

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.white
    },
    container: {
        flex: 1,
    }
})