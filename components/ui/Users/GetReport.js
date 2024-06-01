import { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
} from "react-native";
import { Table, Row } from "react-native-table-component";

import PrimaryButton from "../../Buttons/PrimaryButton";
import { GetLastReport } from "../../../Services/ReportService";
import { SelectList } from "react-native-dropdown-select-list";

function GetReport() {
  const data = ["פלוגה א", "פלוגה ב", "פלוגה ג", "פלוגה מסייעת", "מפקדה"];
  const [group, setGroup] = useState("");
  const [report, setReport] = useState([]);

  const FindReportHandler = async () => {
    const report = await GetLastReport(group);
    if (report.data) {
      setReport(report.data.reports);
    } else {
      Alert.alert("הפלוגה לא שלחה עדיין דוח צ'");
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
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
          <PrimaryButton title="FindReport" onPress={FindReportHandler}>
            מצא דוח
          </PrimaryButton>
        </View>
        <ScrollView>
          <View style={styles.containerT}>
            <View style={styles.containerTable}>
              <Table borderStyle={{ borderWidth: 2, borderColor: "black" }}>
                <Row
                  data={["צ'", "סוג", "מיקום", "פלוגה", "סטטוס"]}
                  style={styles.head}
                  textStyle={styles.text}
                />

                {report.map(
                  ({
                    _id,
                    id_product,
                    product_name,
                    locationProduct,
                    status_product,
                    group_name,
                  }) => (
                    <Row
                      key={_id}
                      data={[
                        id_product,
                        product_name,
                        locationProduct,
                        group_name,
                        status_product.toString(),
                      ]}
                      style={status_product ? styles.green : styles.red}
                      textStyle={styles.text}
                    />
                  )
                )}
              </Table>
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default GetReport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#172554",
    // alignItems: "center",
  },
  containerT: {
    flex: 1,
    backgroundColor: "#172554",
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
  containerTable: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  head: { height: 40, backgroundColor: "#f1f8ff", textAlign: "center" },
  text: { margin: 6, textAlign: "center", fontWeight: "bold" },
  green: { backgroundColor: "lightgreen" },
  red: { backgroundColor: "lightcoral" },
});
