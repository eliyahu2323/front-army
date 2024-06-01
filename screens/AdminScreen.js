import WelcomeScreen from "../components/ui/WelcomeScreen";
import AdminScreenUser from "./AdminScreenUser";
import AdminScreenProduct from "./AdminScreenProduct";
import AdminScreenNotification from "./AdminScreenNotification";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

function Admin() {
  return (
    <Tab.Navigator
      initialRouteName="ברוכים הבאים"
      screenOptions={{
        headerStyle: { backgroundColor: "#f97316" },
        headerTintColor: "white",
        headerTitleAlign: "center",
        tabBarStyle: { backgroundColor: "#f97316" },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="ברוכים הבאים"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="הודעות"
        component={AdminScreenNotification}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="משתמש"
        component={AdminScreenUser}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="מכשירים"
        component={AdminScreenProduct}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Admin;
