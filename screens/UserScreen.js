// import { createDrawerNavigator } from "@react-navigation/drawer";
// const Drawer = createDrawerNavigator();

import GetUserProduct from "../components/ui/Products/GetUserProduct";
import WelcomeScreen from "../components/ui/WelcomeScreen";
import GetProduct from "../components/ui/Products/GetProduct";
import ScanBarcode from "../components/ui/Products/ScanBarcode";
import NotificationScreen from "../components/ui/Notification/NotificationUserScreen";

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

function User() {
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
        name="מוצרים"
        component={GetUserProduct}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="clipboard-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="חיפוש מכשיר"
        component={GetProduct}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="סריקת מכשיר"
        component={ScanBarcode}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barcode-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="תיבת פניות"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default User;
