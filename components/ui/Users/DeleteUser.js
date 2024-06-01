import { useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Text,
} from "react-native";

import PrimaryButton from "../../Buttons/PrimaryButton";
import User from "../../../util/User";
import { UserDelete, GetUserById } from "../../../Services/UserService";

function DeleteUser() {
  const [id, setId] = useState("");
  const [user, setUser] = useState("");

  const FindUserHandler = async () => {
    const user = await GetUserById(id);
    if (user) {
      setUser(user);
      setId("");
    } else {
      Alert.alert("לא נמצא משתמש עם מספר אישי כזה");
    }
  };

  const DeleteUserHandler = async () => {
    Alert.alert(
      ` למחוק את המשתמש`,
      "האם אתה בטוח שאתה רוצה להמשיך?",
      [
        {
          text: "כן",
          onPress: () => {
            UserDelete(user[0]._id);
            setUser("");
          },
        },
        {
          text: "לא",
          onPress: () => {
            console.log("User cancelled.");
          },
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
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
            placeholder="מספר אישי:"
            keyboardType="number-pad"
            value={id}
            onChangeText={(text) => setId(text)}
            placeholderTextColor="white"
          />
          <PrimaryButton title="FindUser" onPress={FindUserHandler}>
            מצא משתמש
          </PrimaryButton>

          <FlatList
            data={user}
            renderItem={({ item }) => <User item={item} />}
            keyExtractor={(item, index) => item.id || index.toString()}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
          {user ? (
            <View style={styles.borderInput}>
              <PrimaryButton title="מחק משתמש" onPress={DeleteUserHandler}>
                מחק משתמש
              </PrimaryButton>
            </View>
          ) : (
            <View>
              <Text>יש לבצע חיפוש </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default DeleteUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#172554",
    alignItems: "center",
  },
  input: {
    height: 30,
    borderColor: "#f97316",
    borderWidth: 2,
    borderRadius: 6,
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  borderInput: {
    margin: 30,
  },
});
