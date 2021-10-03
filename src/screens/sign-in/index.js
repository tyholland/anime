import React from "react";
import signStyles from "./sign-in.json";
import globalStyles from "../../../global.json";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Image,
  Platform,
} from "react-native";
import Button from "../../components/button";
import PropTypes from "prop-types";
import TextField from "../../components/text-field";

const SignIn = (props) => {
  return (
    <View
      style={[
        global.container,
        Platform.OS === "ios"
        ? global.iosHeaderBeginning
        : global.androidHeaderBeginning,
      ]}
    >
      <Image
        source={require("../../../assets/abz-logo.png")}
        style={styles.img}
      />
      <Text style={global.title}>Anime Fantasy League</Text>
      <TextField placeholder="Email" keyboard="email-address" />
      <TextField placeholder="Password" type="password" />
      <Button
        btnText="Sign In"
        btnTextColor="black"
        btnColor="orange"
        redirect={() => {
          props.setPage("Home");
        }}
      />
      <View style={styles.contentLinks}>
        <Pressable
          onPress={() => {
            props.setPage("SignUp");
          }}
        >
          <Text style={global.link}>Sign Up</Text>
        </Pressable>
        <Text style={styles.split}>|</Text>
        <Pressable
          onPress={() => {
            props.setPage("Forgot");
          }}
        >
          <Text style={global.link}>Forgot Password?</Text>
        </Pressable>
      </View>
    </View>
  );
};

SignIn.propTypes = {
  setPage: PropTypes.func,
};

const styles = StyleSheet.create(signStyles);
const global = StyleSheet.create(globalStyles);

export default SignIn;
