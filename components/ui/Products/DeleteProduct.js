import { useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Text,
} from "react-native";

import PrimaryButton from "../../Buttons/PrimaryButton";
import { GetProductById } from "../../../Services/ProductService";
import ProductView from "../../../util/ProductView";
import { ProductDelete } from "../../../Services/ProductService";

function DeleteProduct() {
  const [id, setId] = useState("");
  const [product, setProduct] = useState("");

  const FindProductHandler = async () => {
    const data = await GetProductById(id);

    if (data.product[0]) {
      setProduct(data.product);
    } else {
      setId("");
      setProduct("");
      Alert.alert("מספר צ לא קיים");
    }
  };

  const DeleteProductHandler = async () => {
    Alert.alert(
      ` למחוק את המכשיר`,
      "האם אתה בטוח שאתה רוצה להמשיך?",
      [
        {
          text: "כן",
          onPress: () => {
            ProductDelete(product[0].id_product);
            setProduct("");
          },
        },
        {
          text: "לא",
          onPress: () => {
            console.log("User cancelled.");
          },
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
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
            placeholder="צ' לחיפוש"
            keyboardType="number-pad"
            value={id}
            onChangeText={(text) => setId(text)}
            placeholderTextColor="white"
          />
          <PrimaryButton title="FindProduct" onPress={FindProductHandler}>
            מצא מכשיר
          </PrimaryButton>

          <FlatList
            data={product}
            renderItem={({ item }) => <ProductView item={item} />}
            keyExtractor={(item, index) => item.id || index.toString()}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
          {product ? (
            <View style={styles.borderInput}>
              <PrimaryButton title="מחק מכשיר" onPress={DeleteProductHandler}>
                מחק מכשיר
              </PrimaryButton>
            </View>
          ) : (
            <View>
              <Text>יש לחפש מכשיר</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default DeleteProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#172554",
    alignItems: "center",
  },
  input: {
    height: 30,
    borderColor: "#f97316",
    borderWidth: 2,
    borderRadius: 6,
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  borderInput: {
    margin: 30,
  },
});
