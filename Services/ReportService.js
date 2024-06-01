import axios from "axios";
import { Alert } from "react-native";
import { GetUser } from "./GetUserAuth";

export async function CreateReport(products) {
  const user = await GetUser();
  const data = {
    group: user.group,
    battalion: user.battalion,
    reports: products,
  };

  try {
    await axios.post(
      "http://83.229.71.121:8000/api/v1/Reports/createReports",
      data
    );
    Alert.alert("הדוח נשלח");
  } catch (error) {
    if (error.response && error.response.status === 400) {
      Alert.alert(error.response.data.errors[0].msg);
    } else {
      Alert.alert("משהו השתבש אנא נסה שנית או תפנה לאחראי");
    }
  }
}

export async function GetLastReport(group) {
  const user = await GetUser();

  const params = { group: group, battalion: user.battalion };
  const products = await axios
    .get("http://83.229.71.121:8000/api/v1/Reports/getLastReports", { params })
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        Alert.alert("axios Failed!");
      }
    })
    .catch((error) => {
      Alert.alert("אנא השלם פלוגה מהרשימה");
    });
  return products;
}
