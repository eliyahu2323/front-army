import { View, Text, StyleSheet } from "react-native";

function UserView({ item }) {
  return (
    <View style={styles.border}>
      <View style={styles.item}>
        <View style={styles.containerProducts}>
          <Text style={styles.textProduct}>שם משתמש:{item.name}</Text>
          <Text style={styles.textProduct}>מספר אישי: {item.id_number}</Text>
          <Text style={styles.textProduct}>אימייל:{item.email}</Text>
          <Text style={styles.textProduct}>פלוגה:{item.group}</Text>
          <Text style={styles.textProduct}>גדוד:{item.battalion}</Text>
          <Text style={styles.textProduct}>מספר טלפון: 0{item.phone}</Text>
        </View>
      </View>
    </View>
  );
}

export default UserView;

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
});
