import { View, Text, Pressable, StyleSheet } from "react-native";
function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children ? "לא נמצא" : "נמצא"}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#f97316",
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 40,
    margin: 10,
    elevation: 2,
    marginTop: 10,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  pressed: {
    opacity: 0.75,
  },
});
