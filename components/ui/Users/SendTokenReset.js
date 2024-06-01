import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { SendTokenResetToEmail } from "../../../Services/ForgotPasswordService";

function SendTokenReset({ navigation }) {
  const [email, setEmail] = useState("");

  const sendTokenHandler = () => {
    SendTokenResetToEmail(email, { navigation });
    setEmail("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.borderInput}>
        <TextInput
          style={styles.input}
          placeholder="אימייל"
          value={email}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="white"
        />
      </View>
      <PrimaryButton title="Login" onPress={sendTokenHandler}>
        שליחת קוד למייל
      </PrimaryButton>
    </View>
  );
}

export default SendTokenReset;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#172554",
    padding: 20,
  },

  input: {
    height: 40,
    borderColor: "#f97316",
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 6,
    fontWeight: "bold",
    color: "white",
    textAlign: "right",
  },
  borderInput: {
    width: "80%",
    marginTop: 10,
    height: 120,
  },
});
