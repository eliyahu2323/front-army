import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Keyboard,
  Pressable,
  TouchableWithoutFeedback,
  Text,
} from "react-native";

import { Login } from "../Services/LoginService";
import PrimaryButton from "../components/Buttons/PrimaryButton";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginHandler = async () => {
    await Login(email, password, { navigation });
    setEmail("");
    setPassword("");
  };

  const ForgetPasswordHandler = async () => {
    navigation.navigate("ForgotPassword");
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/Alexandroni.svg.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.borderInput}>
          <TextInput
            style={styles.input}
            placeholder="אימייל"
            value={email}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="סיסמא"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="white"
          />
        </View>
        <PrimaryButton title="Login" onPress={LoginHandler}>
          כניסה
        </PrimaryButton>
        <Pressable onPress={ForgetPasswordHandler} fontWeight="bold">
          <Text style={styles.text}>שחזור סיסמא</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#172554",
    paddingTop: 60,
    paddingHorizontal: 15,
  },
  buttonBorder: {
    borderColor: "#f97316",
    borderWidth: 3,
    borderRadius: 15,
  },
  borderInput: {
    width: "80%",
    marginTop: 30,
    height: 120,
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
  logo: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
  logoContainer: {
    marginBottom: 30,
  },
  text: {
    color: "white",
    padding: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
});
