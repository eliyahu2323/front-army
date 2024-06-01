import AddUser from "../components/ui/Users/AddUser";
import GetOneUser from "../components/ui/Users/GetOneUser";
import GetAllUsers from "../components/ui/Users/GetAllUsers";
import DeleteUser from "../components/ui/Users/DeleteUser";
import UpdateUser from "../components/ui/Users/UpdateUser";
import OptionsUser from "../components/AdminOptions/OptionsUser";
import GetReport from "../components/ui/Users/GetReport";

import { createStackNavigator } from "@react-navigation/stack";
const InnerStack = createStackNavigator();

function AdminOptionsUser() {
  return (
    <InnerStack.Navigator
      initialRouteName="אופציות מכשירים"
      screenOptions={{
        headerShown: false,
      }}
    >
      <InnerStack.Screen name="אופציות מכשירים" component={OptionsUser} />
      <InnerStack.Screen name="הוסף חשבון" component={AddUser} />
      <InnerStack.Screen name="מחק חשבון" component={DeleteUser} />
      <InnerStack.Screen name="עדכן פרטי חשבון" component={UpdateUser} />
      <InnerStack.Screen name="הצג את כל היוזרים" component={GetAllUsers} />
      <InnerStack.Screen name="חפש חשבון" component={GetOneUser} />
      <InnerStack.Screen name="קבלת דוח" component={GetReport} />
    </InnerStack.Navigator>
  );
}

export default AdminOptionsUser;
