import { useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import PrimaryButton from "../../Buttons/PrimaryButton";
import User from "../../../util/User";
import { GetUserById } from "../../../Services/UserService";

function GetOneUser() {
  const [id, setId] = useState("");
  const [user, setUser] = useState("");

  const FindUserHandler = async () => {
    const data = await GetUserById(id);
    console.log(data);
    if (data) {
      setUser(data);
      setId("");
    } else {
      Alert.alert("לא נמצא משתמש עם המספר אישי הזה!!");
      setId("");
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.borderInput}>
          <TextInput
            style={styles.input}
            placeholder="מספר אישי"
            keyboardType="number-pad"
            value={id}
            onChangeText={(text) => setId(text)}
            placeholderTextColor="white"
          />
          <PrimaryButton title="FindUser" onPress={FindUserHandler}>
            מצא משתמש
          </PrimaryButton>
        </View>
        <FlatList
          data={user}
          renderItem={({ item }) => <User item={item}>שינוי מיקום</User>}
          keyExtractor={(item, index) => item.id || index.toString()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default GetOneUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#172554",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "#f97316",
    borderWidth: 2,
    borderRadius: 6,
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  borderInput: {
    marginTop: 20,
  },
});
