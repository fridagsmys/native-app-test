import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Index from "./index";
import Settings from "./settings";
import Discover from "./discover";
import Notifications from "./notifications";
import Add from "./add";

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "white",
    borderRadius: 15,
    height: 90,

    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  touchableOpacityStyle: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  addBtn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#e32f45",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

const Tab = createBottomTabNavigator();

const CustomTabBarBtn = (props: TouchableOpacityProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      {...props}
      style={styles.touchableOpacityStyle}
      onPress={() => navigation.navigate("add")}
    >
      <View style={styles.addBtn}>
        <Ionicons name="add" size={40} color="white" />
      </View>
    </TouchableOpacity>
  );
};

type IconName =
  | "home"
  | "home-outline"
  | "settings"
  | "settings-outline"
  | "eye"
  | "eye-outline"
  | "notifications"
  | "notifications-outline"
  | "add"
  | "add-outline";

export default function RootLayout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
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
        tabBarActiveTintColor: "#e32f45",
        tabBarInactiveTintColor: "#748c94",
      })}
    >
      <Tab.Screen name="index" component={Index} />
      <Tab.Screen name="discover" component={Discover} />
      <Tab.Screen
        name="add"
        component={Add}
        options={{ tabBarButton: (props) => <CustomTabBarBtn {...props} /> }}
      />
      <Tab.Screen name="notifications" component={Notifications} />
      <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>
  );
}
