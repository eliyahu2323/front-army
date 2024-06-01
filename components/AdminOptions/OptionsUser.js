import { View, StyleSheet } from "react-native";
import OptionButton from "../Buttons/OptionsButton";

function AdminOptionsUser({ navigation }) {
  const AddUserHandler = () => {
    navigation.navigate("הוסף חשבון");
  };
  const DeleteUserHandler = () => {
    navigation.navigate("מחק חשבון");
  };
  const FindAllUsersHandler = () => {
    navigation.navigate("הצג את כל היוזרים");
  };
  const FindUserHandler = () => {
    navigation.navigate("חפש חשבון");
  };
  const UpdateUserHandler = () => {
    navigation.navigate("עדכן פרטי חשבון");
  };
  const NewHandler = () => {
    navigation.navigate("קבלת דוח");
  };

  return (
    <View style={styles.container}>
      <OptionButton onPress={AddUserHandler} color="black">
        הוסף משתמש
      </OptionButton>

      <OptionButton onPress={DeleteUserHandler} color="black">
        מחק משתמש
      </OptionButton>

      <OptionButton onPress={FindUserHandler} color="black">
        חפש משתמש
      </OptionButton>

      <OptionButton onPress={FindAllUsersHandler} color="black">
        חפש את כל המשתמשים
      </OptionButton>

      <OptionButton onPress={UpdateUserHandler} color="black">
        עדכן פרטי משתמש
      </OptionButton>

      <OptionButton onPress={NewHandler} color="black">
        בדיקת דוח צ' לפי פלוגה
      </OptionButton>
    </View>
  );
}

export default AdminOptionsUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#172554",
    justifyContent: "center",
  },
});
