import React from "react";
import headerStyles from "./header.json";
import globalStyles from "../../../global.json";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>ABZ</Text>
    </View>
  );
};

const styles = StyleSheet.create(headerStyles);
const global = StyleSheet.create(globalStyles);

export default Header;
