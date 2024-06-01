import AsyncStorage from "@react-native-async-storage/async-storage";

export async function GetUser() {
  const userData = await AsyncStorage.getItem("user");
  const user = JSON.parse(userData);

  return user;
}

export async function GetAuth() {
  const authData = await AsyncStorage.getItem("token");

  return authData;
}
