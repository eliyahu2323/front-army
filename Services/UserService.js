import axios from "axios";
import { Alert } from "react-native";

import { GetAuth } from "./GetUserAuth";
export async function CreateUser(
  name,
  email,
  id_number,
  password,
  passwordConfirm,
  group,
  battalion,
  phone,
  role
) {
  const authToken = await GetAuth();

  const data = {
    name: name,
    email: email,
    password: password,
    passwordConfirm: passwordConfirm,
    group: group,
    battalion: battalion,
    id_number: id_number,
    phone: phone,
    role: role,
  };
  try {
    await axios.post("http://83.229.71.121:3000/api/v1/users/signup", data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });
    Alert.alert("המשתמש נוצר בהצלחה");
  } catch (error) {
    if (error.response && error.response.status === 400) {
      Alert.alert(error.response.data.errors[0].msg);
    }
    if (error.response.data.error.code === 11000) {
      Alert.alert("כתובת מייל כבר קיימת!!, אנא נסה כתובת מייל אחרת");
    }
  }
}

export async function GetUserByEmail(data) {
  const user = await axios
    .get(
      "http://83.229.71.121:3000/api/v1/users/getUser" +
        `${"?email=" + data.email}`
    )
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        Alert.alert("axios Failed!");
      }
    })
    .catch((error) => {
      Alert.alert("אימייל לא תקין");
    });
  return user;
}

export async function GetUserById(id_number) {
  const authToken = await GetAuth();

  try {
    const user = await axios.get(
      "http://83.229.71.121:3000/api/v1/users/getUser" +
        `${"?id_number=" + id_number}`,

      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return user.data.query;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      Alert.alert(error.response.data.errors[0].msg);
    }
  }
}

export async function GetAllUsers() {
  const authToken = await GetAuth();

  try {
    const user = await axios.get(
      "http://83.229.71.121:3000/api/v1/users/getAllUsers",

      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return user.data.users;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      Alert.alert(error.response.data.errors[0].msg);
    }
  }
}

export async function UserDelete(id_number) {
  const authToken = await GetAuth();
  try {
    await axios.delete(
      "http://83.229.71.121:3000/api/v1/users/deleteUser" +
        `${"?_id=" + id_number}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    Alert.alert("המשתמש נמחק");
  } catch (error) {
    Alert.alert("משהו השתבש, מחיקת המתמש לא הצליחה");
  }
}

export async function UserUpdate(id_user, data) {
  const authToken = await GetAuth();

  await axios
    .patch(
      `http://83.229.71.121:3000/api/v1/users/updateUser${"?_id=" + id_user}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        Alert.alert("axios Failed!");
      }
    })
    .catch((error) => {
      Alert.alert("עדכון פרטים נכשל אנא נסה שוב.");
    });
}
