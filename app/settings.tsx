import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>Edit app/settings.tsx to edit this screen.</Text>
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
