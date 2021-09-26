import React from "react";
import headerStyles from "./header.json";
import globalStyles from "../../../global.json";
import { StyleSheet, Text, View, Platform } from "react-native";

const Header = () => {
  return (
    <View style={Platform.OS === 'ios' ? styles.iosContainer : styles.androidContainer}>
      <Text style={Platform.OS === 'ios' ? styles.iosHeaderTitle : styles.androidHeaderTitle}>ABZ</Text>
    </View>
  );
};

const styles = StyleSheet.create(headerStyles);
const global = StyleSheet.create(globalStyles);

export default Header;
