import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { GetNotificationToUpdate } from "../../../Services/NotificationService";
import PrimaryButton from "../../Buttons/PrimaryButton";
import NotificationView from "../../../util/NotificationView";

import { SelectList } from "react-native-dropdown-select-list";

function GetNotificationAndUpdate() {
  const data = [
    "פלוגה א",
    "פלוגה ב",
    "פלוגה ג",
    "פלוגה מסייעת",
    "חפק",
    "רקש",
    "פלוגת אלון",
    "מפקדה",
  ];
  const [id, setId] = useState("");
  const [group, setGroup] = useState("");
  const [notification, setNotification] = useState([]);

  const FindNotificationHandler = async () => {
    const not = await GetNotificationToUpdate(group, id);
    setNotification(not.notifications);
    setId("");
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <SelectList
          setSelected={(val) => setGroup(val)}
          data={data}
          boxStyles={[styles.input]}
          inputStyles={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18,
          }}
          dropdownStyles={{ backgroundColor: "#fff7ed" }}
          dropdownTextStyles={{
            fontSize: 18,
            textAlign: "center",
            fontWeight: "bold",
          }}
          textStyles={{ textAlign: "right" }}
          placeholder="בחר פלוגה"
          placeholderStyle={styles.input}
        />
        <TextInput
          style={styles.input}
          placeholder="מספר פניה"
          keyboardType="number-pad"
          value={id}
          onChangeText={(text) => setId(text)}
          placeholderTextColor="black"
        />
        <PrimaryButton title="FindUser" onPress={FindNotificationHandler}>
          מצא הודעה
        </PrimaryButton>
        {notification[0] ? <NotificationView item={notification} /> : ""}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default GetNotificationAndUpdate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#172554",
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
    textAlign: "center",
    width: "80%",
    fontWeight: "bold",
    backgroundColor: "#fff7ed",
    fontSize: 18,
  },
});
