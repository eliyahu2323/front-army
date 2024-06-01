import OptionsNotification from "../components/AdminOptions/OptionsNotification";
import GetAllNotification from "../components/ui/Notification/GetAllNotification";
import GetNotificationAndUpdate from "../components/ui/Notification/GetNotificationAndUpdate";
import NewNotificaton from "../components/ui/Notification/NewNotification";

import { createStackNavigator } from "@react-navigation/stack";
const InnerStack = createStackNavigator();

function AdminOptionsUser() {
  return (
    <InnerStack.Navigator
      initialRouteName="אופציות הודעות"
      screenOptions={{
        headerShown: false,
      }}
    >
      <InnerStack.Screen
        name="אופציות הודעות"
        component={OptionsNotification}
      />
      <InnerStack.Screen name="כל ההודעות" component={GetAllNotification} />
      <InnerStack.Screen
        name="עדכון הודעה"
        component={GetNotificationAndUpdate}
      />
      <InnerStack.Screen name="חדש" component={NewNotificaton} />
    </InnerStack.Navigator>
  );
}

export default AdminOptionsUser;
