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

import { GetAllProduct } from "../../../Services/ProductService";
import PrimaryButton from "../../Buttons/PrimaryButton";

LogBox.ignoreLogs([
  "Failed prop type: Invalid prop `textStyle` of type `array` supplied to `Cell`, expected `object`.",
]);

function GetUserProduct({ navigation }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    GetAllProductsHandler();
  }, []);

  const GetAllProductsHandler = async () => {
    const data = await GetAllProduct();
    if (data) {
      setProduct(data.products);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 100}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerTable}>
            <Table borderStyle={{ borderWidth: 2, borderColor: "black" }}>
              <Row
                data={["צ'", "סוג", "מיקום", "פלוגה", "סטטוס"]}
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
            <PrimaryButton title={"GetProduct"} onPress={GetAllProductsHandler}>
              קבל מכשירים
            </PrimaryButton>
          </View>
        </View>
      </ScrollView>
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
