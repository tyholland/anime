import React from "react";
import settingsStyles from "./settings.json";
import globalStyles from "../../../global.json";
import { StyleSheet, View, Pressable, Text, Platform } from "react-native";
import PropTypes from "prop-types";

const Settings = (props) => {
  return (
    <View
      style={[
        global.container,
        Platform.OS === "ios"
          ? global.iosHeaderBeginning
          : global.androidHeaderBeginning,
      ]}
    >
      <View style={styles.contentLinks}>
        <Pressable>
          <Text style={styles.link}>Schedule</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable>
          <Text style={styles.link}>Scoreboard</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable>
          <Text style={styles.link}>Standings</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable>
          <Text style={styles.link}>League Settings</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable onPress={() => props.setPage("Resources")}>
          <Text style={styles.link}>Resources</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable onPress={() => props.setPage("Suggestions")}>
          <Text style={styles.link}>Suggestions</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable
          onPress={() => {
            props.setPage("Home");
            props.setHasHeader(false);
          }}
        >
          <Text style={styles.link}>Switch Leagues</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable
          onPress={() => {
            props.setPage("SignIn");
            props.setHasHeader(false);
          }}
        >
          <Text style={styles.link}>Log Out</Text>
        </Pressable>
      </View>
    </View>
  );
};

Settings.propTypes = {
  setPage: PropTypes.func,
  setHasHeader: PropTypes.func,
};

const styles = StyleSheet.create(settingsStyles);
const global = StyleSheet.create(globalStyles);

export default Settings;
