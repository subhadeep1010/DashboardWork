import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ImageBackground,
} from "react-native";

const { width } = Dimensions.get("window");

export default function StatisticsCard({ item, backgroundColor }) {
  return (
    <ImageBackground
      source={item.background}
      style={styles.card}
      imageStyle={{ borderRadius: 6 }}
    >
      <View style={styles.chipContainer}>
        <Text style={[styles.chip, { backgroundColor: backgroundColor }]}>
          Pending: <Text style={{fontFamily: "poppins-bold"}}>{item.pendingCount}</Text>
        </Text>
      </View>
      <Text style={styles.count}>{item.count}</Text>
      <Text style={styles.label}>{item.label}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginHorizontal: 2,
    width: width / 2 - 16,
    paddingLeft: 12,
    paddingVertical: 4,
    paddingRight: 6,
  },
  chip: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
    backgroundColor: "rgba(255,255,255,0.175)",
    paddingHorizontal: 10,
    paddingTop: 3,
    borderRadius: 10,
    fontFamily: "poppins-medium",
    
  },
  count: {
    fontSize: 30,
    color: "white",
    fontFamily: "poppins-bold",
    marginBottom: -8,
  },
  label: {
    fontSize: 18,
    color: "white",
    fontFamily: "poppins-medium",
  },

  chipContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
});
