import { View, StyleSheet } from "react-native";
import OptionButton from "../Buttons/OptionsButton";
function AdminOptionsProduct({ navigation }) {
  const AddProductHandler = () => {
    navigation.navigate("הוסף מכשיר");
  };
  const FindProductsHandler = () => {
    navigation.navigate("חיפוש מכשיר");
  };
  const FindAllProductsHandler = () => {
    navigation.navigate("כל המכשירים");
  };

  const DeleteProductHandler = () => {
    navigation.navigate("מחיקת מכשיר");
  };
  const UpdateProductHandler = () => {
    navigation.navigate("העברת מכשיר");
  };
  const ScanBarcodeHandler = () => {
    navigation.navigate("סריקת מכשיר");
  };

  return (
    <View style={styles.container}>
      <OptionButton onPress={AddProductHandler} color="black">
        הוסף מכשיר
      </OptionButton>

      <OptionButton onPress={FindProductsHandler} color="black">
        חיפוש מכשיר
      </OptionButton>

      <OptionButton
        title="כל המכשירים"
        onPress={FindAllProductsHandler}
        color="black"
      >
        כל המכשירים
      </OptionButton>

      <OptionButton onPress={UpdateProductHandler} color="black">
        העברת מכשיר
      </OptionButton>
      <OptionButton onPress={DeleteProductHandler} color="black">
        מחיקת מכשיר
      </OptionButton>
      <OptionButton onPress={ScanBarcodeHandler} color="black">
        בקרוב פיצר חדש (חיפוש מכשיר על ידי ברקוד)
      </OptionButton>
    </View>
  );
}

export default AdminOptionsProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#172554",
    justifyContent: "center",
  },
});
