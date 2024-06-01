import { useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";

import { CreateUser } from "../../../Services/UserService";
import Exit from "../../Buttons/ExitButton";

function AddUser({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [group, setGroup] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("user");
  const [id, setId] = useState("");
  const [battalion, setBattalion] = useState("");

  Exit({ navigation });

  const CreateUserHandler = async () => {
    await CreateUser(
      name,
      email,
      id,
      password,
      passwordConfirm,
      group,
      battalion,
      phone,
      role
    );
    setRole("user");
    setEmail("");
    setGroup("");
    setName("");
    setPassword("");
    setPasswordConfirm("");
    setPhone("");
    setId("");
    setBattalion("");
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.borderInput}>
            <TextInput
              style={styles.input}
              placeholder="שם מלא:"
              value={name}
              onChangeText={(text) => setName(text)}
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              placeholder="אימייל:"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              placeholder="סיסמא:"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              placeholder="אימות סיסמא:"
              secureTextEntry
              value={passwordConfirm}
              onChangeText={(text) => setPasswordConfirm(text)}
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              placeholder="מספר אישי:"
              keyboardType="phone-pad"
              value={id}
              onChangeText={(text) => setId(text)}
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              placeholder="פלוגה:"
              value={group}
              onChangeText={(text) => setGroup(text)}
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              placeholder="גדוד:"
              value={battalion}
              onChangeText={(text) => setBattalion(text)}
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              placeholder="מספר טלפון:"
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              placeholder=":user/admin"
              value={role}
              onChangeText={(text) => setRole(text)}
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.buttonBorder}>
            <PrimaryButton title="Add User" onPress={CreateUserHandler}>
              הוסף משתמש
            </PrimaryButton>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

export default AddUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#172554",
    alignItems: "center",
  },
  borderInput: {
    width: "80%",
    height: 200,
  },
  input: {
    height: 40,
    borderColor: "#f97316",
    borderWidth: 2,
    borderRadius: 6,
    marginBottom: 16,
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: "white",
    textAlign: "right",
    fontSize: 20,
  },
  buttonBorder: {
    borderRadius: 15,
    marginTop: 430,
    paddingVertical: 10,
    paddingHorizontal: 30,
    bottom: 150,
  },
});
