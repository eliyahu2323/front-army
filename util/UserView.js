import { View, Text, StyleSheet } from "react-native";

function ProductView({ item }) {
  return (
    <View style={styles.border}>
      <View style={styles.item}>
        <View style={styles.containerProducts}>
          <Text style={styles.textProduct}>
            הצ' של המכשיר :{item.id_product}
          </Text>
          <Text style={styles.textProduct}>מיקום: {item.locationProduct}</Text>
          <Text style={styles.textProduct}>סוג מכשיר :{item.product_name}</Text>
          <Text style={styles.textProduct}>
            נמצא או לא:
            {item.status_product ? (
              <Text style={styles.access}> "נמצא" </Text>
            ) : (
              <Text style={styles.unAccess}> "לא נמצא"</Text>
            )}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ProductView;

const styles = StyleSheet.create({
  border: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    height: 350,
  },
  item: {
    width: "100%",
    padding: 10,
    margin: 6,
    backgroundColor: "lightgray",
    borderRadius: 5,
    paddingTop: 10,
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
  access: {
    color: "green",
  },
  unAccess: {
    color: "red",
  },
});
