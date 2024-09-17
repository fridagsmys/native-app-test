import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text>Edit app/notifications.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4F772D",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
