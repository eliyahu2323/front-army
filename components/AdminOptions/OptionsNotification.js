import { View, StyleSheet } from "react-native";
import OptionButton from "../Buttons/OptionsButton";
function AdminOptionsNotification({ navigation }) {
  const FindAllNotificationHandler = () => {
    navigation.navigate("כל ההודעות");
  };
  const FindNotificationHandler = () => {
    navigation.navigate("עדכון הודעה");
  };

  const NewHandler = () => {
    navigation.navigate("חדש");
  };

  return (
    <View style={styles.container}>
      <OptionButton onPress={FindAllNotificationHandler} color="black">
        כל ההודעות
      </OptionButton>

      <OptionButton onPress={FindNotificationHandler} color="black">
        חיפוש הודעה
      </OptionButton>

      <OptionButton onPress={NewHandler} color="black">
        בקרוב פיצר חדש
      </OptionButton>
    </View>
  );
}

export default AdminOptionsNotification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#172554",
    justifyContent: "center",
  },
});
