import { useNavigation } from '@react-navigation/native';
import * as React from "react";
import { Text, View } from "react-native";

export default function Index() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}