import axios from "axios";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function Login(email, password, { navigation }) {
  try {
    const response = await axios.post(
      "http://83.229.71.121:3000/api/v1/users/login",
      {
        email: email,
        password: password,
      }
    );

    if (response.data) {
      const token = response.data.token;
      const userData = response.data.data.user;
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("user", JSON.stringify(userData));

      if (userData.role === "admin") {
        navigation.navigate("Admin");
      } else {
        navigation.navigate("User");
      }
    } else {
      Alert.alert("משהו השתבש אנא נסה שוב מאוחר יותר");
    }
  } catch (error) {
    console.log("Error:", error);
    console.log("Error Message:", error.message);
    console.log("Error Response:", error.response);
    Alert.alert(error.message);
  }
}
