import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { UserUpdate } from "../Services/UserService";
function UpdateUserView({ item }) {
  const [name, setName] = useState(item.name);
  const [id, setId] = useState(`${item.id_number}`);
  const [email, setEmail] = useState(item.email);
  const [group, setGroup] = useState(item.group);
  const [role, setRole] = useState(item.role);

  const UpdateUserHandler = async () => {
    const data = {
      name: name,
      id_number: id,
      email: email,
      group: group,
      role: role,
    };

    try {
      UserUpdate(item.id, data);
      Alert.alert("השינויים בוצעו");
    } catch (err) {
      Alert.alert("ארעה שגיאה אנא נסה שוב מאוחר יותר");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="שם"
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
          placeholder="הרשאות:"
          value={role}
          onChangeText={(text) => setRole(text)}
          placeholderTextColor="white"
        />
        <PrimaryButton title="Update User" onPress={UpdateUserHandler}>
          עדכן משתמש
        </PrimaryButton>
      </View>
    </View>
  );
}

export default UpdateUserView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
  item: {
    // paddingVertical: 5,
    paddingEnd: 15,
    width: "80%",
    padding: 15,
    margin: 80,
    backgroundColor: "lightgray",
    borderRadius: 5,
    paddingTop: 20,
    borderRadius: 8,
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 3,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 6,
    fontWeight: "bold",
    color: "black",
    textAlign: "right",
  },
});
