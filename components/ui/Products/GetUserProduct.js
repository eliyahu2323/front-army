import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Table, Row } from "react-native-table-component";
import { useFocusEffect } from "@react-navigation/native";

import { GetProduct } from "../../../Services/ProductService";
import { GetUser } from "../../../Services/GetUserAuth";

import { CreateReport } from "../../../Services/ReportService";
import Exit from "../../Buttons/ExitButton";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "Failed prop type: Invalid prop `textStyle` of type `array` supplied to `Cell`, expected `object`.",
]);
function GetUserProduct({ navigation }) {
  Exit({ navigation });
  const [product, setProduct] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      GetProductUserHandler();
    }, [])
  );

  const GetProductUserHandler = async () => {
    const userData = await GetUser();
    const data = await GetProduct(userData.group);
    if (data) {
      setProduct(data.product);
    }
  };

  const SendReportHandler = async () => {
    CreateReport(product);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100} // Adjust vertical offset if needed
    >
      <View style={styles.container}>
        <View style={styles.containerTable}>
          <Table borderStyle={{ borderWidth: 2, borderColor: "#C1C0B9" }}>
            <Row
              data={["צ'", "סוג", "מיקום", "סטטוס"]}
              style={styles.head}
              textStyle={styles.text}
            />

            {product.map(
              ({
                _id,
                id_product,
                product_name,
                locationProduct,
                status_product,
              }) => (
                <Row
                  key={_id}
                  data={[
                    id_product,
                    product_name,
                    locationProduct,
                    status_product.toString(),
                  ]}
                  textStyle={styles.text}
                  style={status_product ? styles.green : styles.red}
                />
              )
            )}
          </Table>
          <PrimaryButton title={"SendReport"} onPress={SendReportHandler}>
            שלח דוח צ' יומי
          </PrimaryButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default GetUserProduct;

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
  head: { height: 40, backgroundColor: "#f1f8ff", textAlign: "center" },
  text: { margin: 6, textAlign: "center", fontWeight: "bold" },
  green: { backgroundColor: "lightgreen" },
  red: { backgroundColor: "lightcoral" },
});
