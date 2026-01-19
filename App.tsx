import {StyleSheet} from 'react-native';
import AppText from "./src/components/texts/AppText";
import AppSaveView from "./src/components/views/AppSaveView";
import {SafeAreaProvider} from "react-native-safe-area-context";
import FlashMessage, {showMessage} from "react-native-flash-message";

export default function App() {
    return (
        <SafeAreaProvider>
            <FlashMessage position="top" />
            <AppSaveView style={styles.container}>
                <AppText
                    onPress={() => showMessage({
                        message: "Hello World!",
                        type: "success",
                        icon: "auto"
                    })}
                >Hello World!</AppText>
                <AppText variant='bold'>Hello World!</AppText>
            </AppSaveView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {},
});
