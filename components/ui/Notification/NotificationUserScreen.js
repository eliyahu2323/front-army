import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

import PrimaryButton from "../../Buttons/PrimaryButton";
import Notification from "../../../util/Notification";
import Exit from "../../Buttons/ExitButton";
import {
  CreateNotification,
  GetLastNumberNotifications,
  GetAllUserNotifications,
} from "../../../Services/NotificationService";

function NotificationScreen({ navigation }) {
  Exit({ navigation });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    GetAllNotificationHandler();
  }, []);

  useEffect(() => {}, [notifications]);

  const sendNotificationHandler = async () => {
    const number = await GetLastNumberNotifications();
    if (number.notifications[0]) {
      CreateNotification(
        title,
        content,
        number.notifications[0].number_message + 1
      );
    } else {
      CreateNotification(title, content, 1);
    }
    setContent("");
    setTitle("");
    GetAllNotificationHandler();
  };

  const GetAllNotificationHandler = async () => {
    const notification = await GetAllUserNotifications();
    setNotifications(notification.notifications);
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="כותרת"
            value={title}
            textAlign="right"
            onChangeText={(text) => setTitle(text)}
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.input}
            placeholder="כאן ניתן לרשום דרישות/תקלות"
            value={content}
            multiline={true}
            textAlign="right"
            minHeight={90}
            onChangeText={(text) => setContent(text)}
            placeholderTextColor="black"
          />
          <PrimaryButton title="notification" onPress={sendNotificationHandler}>
            שלח פנייה
          </PrimaryButton>
          <View>
            <Notification item={notifications} />
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 40,
    padding: 500,
    backgroundColor: "#172554",
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
    textAlign: "right",
    width: "100%",
    fontWeight: "bold",
    backgroundColor: "#fff7ed",
    fontSize: 18,
  },
  // title: {
  //   fontWeight: "bold",
  //   color: "white",
  //   fontSize: 18,
  //   alignItems: "center",
  // },
});
