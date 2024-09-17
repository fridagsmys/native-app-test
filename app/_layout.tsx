import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Index from "./index";
import Settings from "./settings";
import Discover from "./discover";
import Notifications from "./notifications";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#C0C0C0",
    borderRadius: 4,
    margin: 4,
    height: 40,
  },
});

const Tab = createBottomTabNavigator();

type IconName =
  | "home"
  | "home-outline"
  | "settings"
  | "settings-outline"
  | "eye"
  | "eye-outline"
  | "notifications"
  | "notifications-outline";

export default function RootLayout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: IconName;

          if (route.name === "index") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "discover") {
            iconName = focused ? "eye" : "eye-outline";
          } else if (route.name === "notifications") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else {
            iconName = "home";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => null,
        tabBarActiveTintColor: "gray",
        tabBarInactiveTintColor: "lightgray",
      })}
    >
      <Tab.Screen name="index" component={Index} options={{ title: "Home" }} />
      <Tab.Screen
        name="discover"
        component={Discover}
        options={{ title: "Discover" }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifications}
        options={{ title: "Notifications" }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
}
