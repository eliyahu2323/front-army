import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import PrimaryButton from "../../Buttons/PrimaryButton";
import Exit from "../../Buttons/ExitButton";
import { ChangeNewPassword } from "../../../Services/ForgotPasswordService";
function ChangePassword({ navigation }) {
  Exit({ navigation });
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const [token, setToken] = useState({});
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const ChangePasswordHandler = () => {
    if (password === passwordConfirm) {
      ChangeNewPassword(token, password, passwordConfirm);
    }
    navigation.navigate("Login");
    setToken("");
    setPassword("");
    setPasswordConfirm("");
    Alert.alert("הסיסמא שונתה בהצלחה!");
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.borderInput}>
          <TextInput
            style={styles.input}
            placeholder="הקוד שקיבלת במייל :"
            value={token}
            onChangeText={(text) => setToken(text)}
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="סיסמא חדשה :"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="אימות סיסמא חדשה :"
            secureTextEntry
            value={passwordConfirm}
            onChangeText={(text) => setPasswordConfirm(text)}
            placeholderTextColor="white"
          />

          <PrimaryButton title="ChangePassword" onPress={ChangePasswordHandler}>
            איפוס סיסמא
          </PrimaryButton>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#172554",
    padding: 10,
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
    height: 280,
  },
});
