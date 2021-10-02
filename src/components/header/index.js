import React from "react";
import headerStyles from "./header.json";
import Nav from "../nav";
import { StyleSheet, Text, View, Platform } from "react-native";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <View
      style={
        Platform.OS === "ios" ? styles.iosContainer : styles.androidContainer
      }
    >
      <Text
        style={
          Platform.OS === "ios"
            ? styles.iosHeaderTitle
            : styles.androidHeaderTitle
        }
      >
        ABZ
      </Text>
      <Nav page={props.page} setPage={props.setPage} />
    </View>
  );
};

Header.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func,
};

const styles = StyleSheet.create(headerStyles);

export default Header;
