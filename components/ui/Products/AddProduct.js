import { useState } from "react";

import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import PrimaryButton from "../../Buttons/PrimaryButton";

import { CreateProduct } from "../../../Services/ProductService";

function AddProduct({ navigation }) {
  const [productName, setProductName] = useState("");
  const [idProduct, setIdProduct] = useState("");
  const [group, setGroup] = useState("");
  const [locationProduct, setLocationProduct] = useState("");

  const CreateProductHandler = async () => {
    CreateProduct(productName, idProduct, group, locationProduct);
    setGroup("");
    setIdProduct("");
    setLocationProduct("");
    setProductName("");
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.borderInput}>
          <TextInput
            style={styles.input}
            placeholder="שם מכשיר:"
            value={productName}
            onChangeText={(text) => setProductName(text)}
            placeholderTextColor="white"
          />

          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            placeholder="צ' מכשיר:"
            value={idProduct}
            onChangeText={(text) => setIdProduct(text)}
            placeholderTextColor="white"
          />

          <TextInput
            style={styles.input}
            placeholder="פלוגה:"
            value={group}
            onChangeText={(text) => setGroup(text)}
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder=" אצל מי נמצא המכשיר ?"
            value={locationProduct}
            onChangeText={(text) => setLocationProduct(text)}
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.buttonBorder}>
          <PrimaryButton title="Add Product" onPress={CreateProductHandler}>
            הוסף מכשיר
          </PrimaryButton>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: "#172554",
  },
  borderInput: {
    width: "80%",
    height: 10,
  },
  input: {
    height: 40,
    borderColor: "#f97316",
    borderWidth: 2,
    borderRadius: 6,
    marginBottom: 16,
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: "white",
    textAlign: "right",
    fontSize: 20,
  },
  buttonBorder: {
    borderRadius: 15,
    marginTop: 300,
    paddingVertical: 10,
    paddingHorizontal: 30,
    bottom: 70,
  },
});
