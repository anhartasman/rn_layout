import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box></Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
});
