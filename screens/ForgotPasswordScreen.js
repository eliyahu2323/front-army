import SendTokenReset from "../components/ui/Users/SendTokenReset";
import changePassword from "../components/ui/Users/ChangePasswordByToken";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

function ForgotPasswordScreens() {
  return (
    <Stack.Navigator
      initialRouteName="שליחת אימות למייל"
      screenOptions={{
        headerStyle: { backgroundColor: "#f97316" },
        headerTintColor: "white",
        headerTitleAlign: "center",
        StackBarStyle: { backgroundColor: "#f97316" },
        StackBarActiveTintColor: "black",
        StackBarInactiveTintColor: "white",
      }}
    >
      <Stack.Screen name="שליחת אימות למייל" component={SendTokenReset} />
      <Stack.Screen name="שינוי סיסמא" component={changePassword} />
    </Stack.Navigator>
  );
}

export default ForgotPasswordScreens;
