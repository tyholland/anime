import React from "react";
import navStyles from "./nav.json";
import { StyleSheet, View, Pressable, Text, Platform } from "react-native";
import PropTypes from "prop-types";

const Nav = (props) => {
  const teamView =
    props.page === "Team" || props.page === "Bio" || props.page === "TeamInfo";

  return (
    <View
      style={
        Platform.OS === "ios" ? styles.iosContainer : styles.androidContainer
      }
    >
      <Pressable
        style={[styles.nav, teamView ? styles.navSelected : ""]}
        onPress={() => props.setPage("Team")}
      >
        <Text style={[styles.navText, teamView ? styles.navTextSelected : ""]}>
          Team
        </Text>
      </Pressable>
      <Pressable
        style={[
          styles.nav,
          props.page === "ViewMatchup" ? styles.navSelected : "",
        ]}
        onPress={() => props.setPage("ViewMatchup")}
      >
        <Text
          style={[
            styles.navText,
            props.page === "ViewMatchup" ? styles.navTextSelected : "",
          ]}
        >
          Matchup
        </Text>
      </Pressable>
      <Pressable style={styles.nav}>
        <Text style={styles.navText}>Characters</Text>
      </Pressable>
      <Pressable
        style={[
          styles.nav,
          props.page === "Settings" ? styles.navSelected : "",
        ]}
        onPress={() => props.setPage("Settings")}
      >
        <Text
          style={[
            styles.navText,
            props.page === "Settings" ? styles.navTextSelected : "",
          ]}
        >
          Settings
        </Text>
      </Pressable>
    </View>
  );
};

Nav.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func,
};

const styles = StyleSheet.create(navStyles);

export default Nav;
