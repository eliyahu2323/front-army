import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import PrimaryButton from "../components/Buttons/PrimaryButton";

import { UpdateStatusNotification } from "../Services/NotificationService";
function NotificationView({ item }) {
  const data = ["לא נקרא", "בטיפול", "טופל"];
  const [status, setStatus] = useState("");

  const ChangeStatus = () => {
    UpdateStatusNotification(item[0]._id, item[0].group, status);
    Alert.alert("הסטטוס עודכן במערכת!");
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.item}>
          <View style={styles.containerNotification}>
            <Text style={styles.textNotification}>
              פנייה מספר: {item[0].number_message}
            </Text>
            <Text style={styles.textNotification}>
              כותרת פנייה: {item[0].title}
            </Text>
            <Text style={styles.textNotification}>תוכן: {item[0].message}</Text>
            <Text style={styles.textNotification}>
              מצב פניה: {item[0].status_request}
            </Text>
            <View style={styles.button}>
              <PrimaryButton title="Change status" onPress={ChangeStatus}>
                שינוי סטטוס
              </PrimaryButton>
              <SelectList
                setSelected={(val) => setStatus(val)}
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
                placeholder="בחר סטטוס פנייה"
                placeholderStyle={styles.input}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default NotificationView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 45,
    paddingEnd: 80,
    backgroundColor: "lightgray",
    borderRadius: 5,
    paddingTop: 10,
    alignItems: "center",
  },
  textNotification: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "right",
    lineHeight: 40,
  },
  containerNotification: {
    marginTop: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    fontWeight: "bold",
    backgroundColor: "#fff7ed",
    fontSize: 18,
  },
});
