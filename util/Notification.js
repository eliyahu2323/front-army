import { View, StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";

function Notification({ item }) {
  return (
    <View style={styles.containerTable}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "black" }}>
        <Row
          data={["תאריך פנייה", "כותרת", "סטטוס", "מספר פנייה"]}
          style={styles.head}
          textStyle={styles.text}
        />

        {item
          ? item.map(
              ({
                _id,
                created_date,
                title,
                status_request,
                number_message,
              }) => (
                <Row
                  key={_id}
                  data={[
                    [
                      new Date(created_date).getDate(),
                      "/",
                      new Date(created_date).getMonth() + 1,
                      "/",
                      new Date(created_date).getFullYear(),
                    ],
                    title,
                    status_request,
                    number_message,
                  ]}
                  style={
                    status_request === "לא נקרא"
                      ? styles.red
                      : status_request === "בטיפול"
                      ? styles.orange
                      : styles.green
                  }
                  textStyle={styles.text}
                />
              )
            )
          : null}
      </Table>
    </View>
  );
}

export default Notification;

const styles = StyleSheet.create({
  containerTable: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  head: { height: 40, backgroundColor: "#a5f3fc", textAlign: "center" },
  text: { margin: 6, textAlign: "center", fontWeight: "bold" },
  green: { backgroundColor: "lightgreen" },
  orange: { backgroundColor: "#fbbf24" },
  red: { backgroundColor: "lightcoral" },
});
