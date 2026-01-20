import {StyleSheet} from 'react-native';
import AppText from "./src/components/texts/AppText";
import AppSaveView from "./src/components/views/AppSaveView";
import {SafeAreaProvider} from "react-native-safe-area-context";
import FlashMessage, {showMessage} from "react-native-flash-message";
import AppButton from "./src/components/buttons/AppButton";

export default function App() {
    return (
        <SafeAreaProvider>
            <FlashMessage position="top" />
            <AppSaveView style={styles.container}>
                <AppButton
                    onPress={() => showMessage({message: 'Hello World!', type: 'success'})}
                    title='Show Message'
                />
                <AppText variant='bold'>Hello World!</AppText>
            </AppSaveView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {},
});
