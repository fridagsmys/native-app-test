import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Allemansappen</Text>
      </View>
      <View style={styles.artsNearYouContainer}>
        <Text style={styles.h2}>Arter nära dig</Text>
        <View style={styles.listSection}>
          {/* Map igenom arter nära */}
          {/* Hårdkodat ///////////////////////////// */}
          <View style={styles.listItem}>
            <Text style={styles.text}>Rumpnisse</Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color="#31572C"
            ></Ionicons>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>Rumpnisse</Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color="#31572C"
            ></Ionicons>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>Rumpnisse</Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color="#31572C"
            ></Ionicons>
          </View>
          {/* /////////////////////////////////////// */}
        </View>
      </View>
      {/* 2BoxarArRek */}
      <View style={styles.boxSection}>
        <View style={styles.box}>
          <Ionicons name="camera" size={80} color="#90A955"></Ionicons>
          <Text style={styles.text}>AR</Text>
        </View>
        <View style={styles.box}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4F772D",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 16,
    paddingTop: 40,
  },
  headerContainer: {},
  header: {
    color: "#e3f39e",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  text: {
    color: "#31572C",
    fontWeight: "bold",
  },
  artsNearYouContainer: {
    backgroundColor: "white",
    width: "85%",
    borderRadius: 18,
    padding: 18,
    rowGap: 12,
  },
  h2: {
    color: "#31572C",
    fontWeight: "bold",
    fontSize: 18,
  },
  listSection: {
    rowGap: 12,
  },
  listItem: {
    backgroundColor: "#e3f39e",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxSection: {
    width: "85%",
    flex: 1,
    flexDirection: "row",
    columnGap: 16,
  },
  box: {
    backgroundColor: "white",
    aspectRatio: "1 / 1",
    borderRadius: 12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
