import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    // Flex container  takes up space only required by its children
    // To ensure container take all available space, use flex:1
    // Flex in children will takes up percentage of available space
    <View style={styles.container}>
      <Box
        style={{
          backgroundColor: "#8e9b00",
          top: 75,
          left: 75,
        }}
      >
        Box 1 Shrink
      </Box>
      <Box
        style={{
          backgroundColor: "#b65d1f",
        }}
      >
        Box 2 Shrink
      </Box>
      <Box
        style={{
          backgroundColor: "#1c4c56",
        }}
      >
        Box 3
      </Box>
      <Box
        style={{
          backgroundColor: "#ab9156",
          position: "absolute",
          top: 100,
          left: 100,
        }}
      >
        Box 4
      </Box>
      <Box
        style={{
          backgroundColor: "#6b0803",
        }}
      >
        Box 5
      </Box>
      <Box
        style={{
          backgroundColor: "#1c4c56",
        }}
      >
        Box 6
      </Box>
      <Box
        style={{
          backgroundColor: "#b95f21",
        }}
      >
        Box 7
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});
