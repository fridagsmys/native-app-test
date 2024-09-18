import * as React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Image from "./images/forest2.png";
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <View style={styles.container}>
        {/* Linjär gradient med bild bakgrund ///////////////////////////////////////////// */}
      {/* <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
        <LinearGradient
          colors={['transparent', '#4F772D']}
          style={styles.gradient}
          start={{ x: 0, y: 0.01 }}
          end={{ x: 0, y: 0.25 }}
        /> */}
        {/* /////////////////////////////////////////////////////////////////////////////// */}
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
          <View style={styles.box}>
            <Text style={styles.text}>Varningar</Text>
          </View>
        </View>
      {/* </ImageBackground> */}
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
//   image: {
//     backgroundColor: "#4F772D",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     rowGap: 16,
//     paddingTop: 40,
//   },
//   gradient: {
//     ...StyleSheet.absoluteFillObject,
//   },
  headerContainer: {  },
  header: {
    color: "#e3f39e",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 2,

    // shadowColor: "#333",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // elevation: 5,
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

    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
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
    justifyContent: "center",
    alignItems: "center",
  },
});
