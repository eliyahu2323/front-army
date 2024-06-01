import { View, Text, Pressable, StyleSheet } from "react-native";
function OptionsButton({ children, onPress }) {
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
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default OptionsButton;

const styles = StyleSheet.create({
  buttonOutContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#e7e5e4",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 40,
    margin: 25,
    elevation: 2,
    marginTop: 20,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
  pressed: {
    opacity: 0.75,
  },
});
