import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";

import AcceptButton from "../components/Buttons/AcceptButton";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import {
  ChangeStatusProduct,
  ChangeLocationProduct,
  ChangeGroupProduct,
} from "../Services/ProductService";

function Product({ item, children }) {
  const [data, setData] = useState(item.status_product);
  const [location, setLocation] = useState("");
  const [group, setGroup] = useState("");

  const ChangeStatusHandler = async () => {
    await ChangeStatusProduct(item.id_product);
    if (data) {
      setData(false);
    } else {
      setData(true);
    }
  };

  const changeLocationHandler = async () => {
    if (item) {
      await ChangeLocationProduct(item._id, location);
      item.locationProduct = location;
      setLocation("");
    } else {
      Alert.alert(" יש לחפש מכשיר לפני ביצוע שינוי ");
    }
  };

  const changeGroupHandler = async () => {
    if (item) {
      await ChangeGroupProduct(item._id, group);
      item.group_name = group;
      setGroup("");
    } else {
      Alert.alert(" יש לחפש מכשיר לפני ביצוע שינוי ");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 150}
    >
      <View style={styles.border}>
        <View style={styles.item}>
          <View style={styles.containerProducts}>
            <Text style={styles.textProduct}>
              הצ' של המכשיר :{item.id_product}
            </Text>
            <Text style={styles.textProduct}>
              מיקום: {item.locationProduct}
            </Text>
            <Text style={styles.textProduct}>פלוגה: {item.group_name}</Text>
            <Text style={styles.textProduct}>
              סוג מכשיר :{item.product_name}
            </Text>
            <Text style={styles.textProduct}>
              נמצא או לא:
              {data ? (
                <Text style={styles.access}> "נמצא" </Text>
              ) : (
                <Text style={styles.unAccess}> "לא נמצא"</Text>
              )}
            </Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder={
              children === "שינוי פלוגה"
                ? "לאיזה פלוגה אתה רוצה להעביר?"
                : "המכשיר נמצא אצל?"
            }
            value={children === "שינוי פלוגה" ? group : location}
            onChangeText={(text) =>
              children === "שינוי פלוגה" ? setGroup(text) : setLocation(text)
            }
            placeholderTextColor="black"
          />
          <View style={styles.buttonBorder}>
            <AcceptButton title={"status"} onPress={ChangeStatusHandler}>
              {data}
            </AcceptButton>

            <PrimaryButton
              title="changeLocation"
              onPress={
                children === "שינוי פלוגה"
                  ? changeGroupHandler
                  : changeLocationHandler
              }
            >
              {children}
            </PrimaryButton>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Product;

const styles = StyleSheet.create({
  border: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 50,
    height: 360,
  },
  item: {
    width: "90%",
    padding: 10,
    margin: 6,
    backgroundColor: "lightgray",
    borderRadius: 5,
    paddingTop: 20,
    borderRadius: 8,
  },
  textProduct: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "right",
    lineHeight: 40,
  },
  containerProducts: {
    marginTop: 20,
    marginRight: 30,
    marginVertical: 10,
  },
  buttonBorder: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 8,
    flexDirection: "row",
  },
  access: {
    color: "green",
  },
  unAccess: {
    color: "red",
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 3,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 6,
    fontWeight: "bold",
    color: "black",
    textAlign: "right",
  },
});
