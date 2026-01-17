import { StyleSheet } from 'react-native';
import AppText from "./src/components/texts/AppText";
import AppSaveView from "./src/components/views/AppSaveView";

export default function App() {
  return (
    <AppSaveView style={styles.container}>
      <AppText>Hello World!</AppText>
      <AppText variant='bold'>Hello World!</AppText>
    </AppSaveView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
