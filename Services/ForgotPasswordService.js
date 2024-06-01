import axios from "axios";
import { Alert } from "react-native";
export async function SendTokenResetToEmail(email, { navigation }) {
  const data = {
    email: email,
  };
  try {
    await axios.post(
      "http://83.229.71.121:8080/api/v1/users/forgotPassword",
      data
    );
    navigation.navigate("שינוי סיסמא");
    Alert.alert("נשלח קוד למייל");
  } catch (error) {
    Alert.alert("כתובת מייל אינה חוקית");
  }
}

export async function ChangeNewPassword(token, password, passwordConfirm) {
  const products = await axios
    .patch(
      "http://83.229.71.121:8080/api/v1/users/resetPassword/" + `${token}`,
      {
        password: password,
        passwordConfirm: passwordConfirm,
      }
    )
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        Alert.alert("הטוקן לא תקין אנא נסה שוב או פנה למנהל");
      }
    })
    .catch((error) => {
      Alert.alert("הטוקן לא תקין אנא נסה שוב או פנה למנהל");
    });
  return products;
}
