import { useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import PrimaryButton from "../../Buttons/PrimaryButton";
import Product from "../../../util/Product";
import { GetProductById } from "../../../Services/ProductService";
import Exit from "../../Buttons/ExitButton";
import { GetUser } from "../../../Services/GetUserAuth";

function GetProduct({ navigation }) {
  Exit({ navigation });

  const [id, setId] = useState("");
  const [product, setProduct] = useState("");

  const FindProductHandler = async () => {
    const user = await GetUser();
    const data = await GetProductById(id);
    if (
      data.product[0] &&
      (data.product[0].group_name === user.group || user.role === "admin")
    ) {
      setProduct(data.product);
      setId("");
    } else {
      setId("");
      setProduct("");
      Alert.alert("מספר צ לא קיים");
    }
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
        </View>
        <FlatList
          data={product}
          renderItem={({ item }) => <Product item={item}>שינוי מיקום</Product>}
          keyExtractor={(item, index) => item.id || index.toString()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default GetProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#172554",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "#f97316",
    borderWidth: 2,
    borderRadius: 6,
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  borderInput: {
    marginTop: 20,
  },
  containerProduct: {},
});
