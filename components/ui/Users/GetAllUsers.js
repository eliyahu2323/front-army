import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  LogBox,
} from "react-native";
import { Table, Row } from "react-native-table-component";

import { GetAllUsers } from "../../../Services/UserService";
import PrimaryButton from "../../Buttons/PrimaryButton";

LogBox.ignoreLogs([
  "Failed prop type: Invalid prop `textStyle` of type `array` supplied to `Cell`, expected `object`.",
]);

function GetAllUser({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    GetAllUsersHandler();
  }, []);

  const GetAllUsersHandler = async () => {
    const data = await GetAllUsers();

    console.log(data);
    if (data) {
      setUsers(data);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerTable}>
            <Table borderStyle={{ borderWidth: 2, borderColor: "black" }}>
              <Row
                data={["מ.א", "שם", "פלוגה", "טלפון"]}
                style={styles.head}
                textStyle={styles.text}
              />

              {users.map(({ _id, id_number, name, group, phone }) => (
                <Row
                  key={_id}
                  data={[id_number, name, group, phone]}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default GetAllUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#172554",
  },
  containerTable: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  head: { height: 40, backgroundColor: "#a5f3fc", textAlign: "center" },
  text: { margin: 6, textAlign: "center", fontWeight: "bold" },
});
