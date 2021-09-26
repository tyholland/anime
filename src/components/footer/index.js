import React from "react";
import footerStyles from "./footer.json";
import globalStyles from "../../../global.json";
import { StyleSheet, View, Pressable, Text } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.nav}>
        <Text style={styles.navText}>Team</Text>
      </Pressable>
      <Pressable style={[styles.nav, styles.navSelected]}>
        <Text style={[styles.navText, styles.navTextSelected]}>Matchup</Text>
      </Pressable>
      <Pressable style={styles.nav}>
        <Text style={styles.navText}>Characters</Text>
      </Pressable>
      <Pressable style={styles.nav}>
        <Text style={styles.navText}>League</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create(footerStyles);
const global = StyleSheet.create(globalStyles);

export default Footer;
