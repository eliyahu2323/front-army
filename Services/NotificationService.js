import axios from "axios";
import { Alert } from "react-native";
import { GetUser } from "./GetUserAuth";

export async function CreateNotification(title, message, number_message) {
  const user = await GetUser();
  const data = {
    title: title,
    message: message,
    group: user.group,
    battalion: user.battalion,
    number_message: number_message,
  };
  try {
    await axios.post(
      "http://83.229.71.121:8080/api/v1/Notification/createNotification",
      data
    );
    Alert.alert("ההודעה נוצרה בהצלחה!");
  } catch (error) {
    if (error.response && error.response.status === 400) {
      Alert.alert(error.response.data.errors[0].msg);
    }
  }
}

export async function GetAllUserNotifications() {
  const user = await GetUser();
  const notification = await axios
    .get(
      `http://83.229.71.121:8080/api/v1/Notification/getAllNotificationsByBattalionGroup${
        "?group=" + user.group
      }&${"battalion=" + user.battalion}`
    )
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        Alert.alert("axios Failed!");
      }
    })
    .catch((error) => {
      Alert.alert("קבלת ההודעות נכשל, אנא נסה שוב מאוחר יותר");
    });
  return notification;
}

export async function GetAllNotifications() {
  const user = await GetUser();
  const notification = await axios
    .get(
      `http://83.229.71.121:8080/api/v1/Notification/getAllNotifications${
        "?battalion=" + user.battalion
      }`
    )
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        Alert.alert("axios Failed!");
      }
    })
    .catch((error) => {
      Alert.alert("קבלת ההודעות נכשל, אנא נסה שוב מאוחר יותר");
    });
  return notification;
}

export async function GetLastNumberNotifications() {
  const user = await GetUser();
  const notification = await axios
    .get(
      `http://83.229.71.121:8080/api/v1/Notification/getLastNotification${
        "?group=" + user.group
      }&${"battalion=" + user.battalion}`
    )
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        Alert.alert("axios Failed!");
      }
    })
    .catch((error) => {
      Alert.alert("קבלת ההודעות נכשל, אנא נסה שוב מאוחר יותר");
    });
  return notification;
}

export async function GetNotificationToUpdate(group, number_message) {
  const user = await GetUser();
  const notification = await axios
    .get(
      `http://83.229.71.121:8080/api/v1/Notification/getNotificationByNumberMessage${
        "?group=" + group
      }&${"battalion=" + user.battalion}&${"number_message=" + number_message}`
    )
    .then((response) => {
      if (response.data.notifications[0]) {
        return response.data;
      } else {
        Alert.alert("לא קיים הודעה כזאת");
      }
    })
    .catch((error) => {
      Alert.alert("קבלת ההודעות נכשל, אנא נסה שוב מאוחר יותר");
    });
  return notification;
}

export async function UpdateStatusNotification(id, group, status_request) {
  const user = await GetUser();
  const data = {
    group: group,
    status_request: status_request,
    battalion: user.battalion,
  };
  if (group && status_request && user.battalion) {
    await axios.patch(
      "http://83.229.71.121:8080/api/v1/Notification/updateStatusNotification" +
        `${"?id=" + id}`,
      data
    );
  } else {
    Alert.alert("אנא בחר סטטוס");
  }
}
