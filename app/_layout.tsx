import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Home from "./home";
import Settings from "./settings";
import Discover from "./discover";
import Info from "./info";
import Location from "./location";

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "white",
    borderRadius: 15,
    height: 80,

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
    backgroundColor: "#90A955",
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
      onPress={() => navigation.navigate("loaction")}
    >
      <View style={styles.addBtn}>
        <Ionicons name={"location"} size={40} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export default function RootLayout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#90A955",
        tabBarInactiveTintColor: "#748c94",
      })}
    >
      <Tab.Screen
        name="home"
        options={{
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={28}
                color={color}
              />
            );
          },
        }}
        component={Home}
      />
      <Tab.Screen
        name="discover"
        options={{
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "leaf" : "leaf-outline"}
                size={28}
                color={color}
              />
            );
          },
        }}
        component={Discover}
      />
      <Tab.Screen
        name="location"
        component={Location}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarButton: (props) => <CustomTabBarBtn {...props} />,
        }}
      />
      <Tab.Screen
        name="info"
        options={{
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "help-circle" : "help-circle-outline"}
                size={28}
                color={color}
              />
            );
          },
        }}
        component={Info}
      />
      <Tab.Screen
        name="settings"
        options={{
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={28}
                color={color}
              />
            );
          },
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
}
