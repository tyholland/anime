import React from "react";
import globalStyles from "../../../global.json";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  ScrollView,
  Platform,
} from "react-native";
import Button from "../../components/button";
import PropTypes from "prop-types";
import TextField from "../../components/text-field";

const SignUp = (props) => {
  return (
    <ScrollView centerContent={true}>
      <View
        style={[
          global.container,
          Platform.OS !== "ios" && global.centerContent,
        ]}
      >
        <View>
          <Text style={global.title}>Join ABZ's</Text>
          <Text style={global.title}>Anime Fantasy League</Text>
        </View>
        <TextField
          placeholder="Please enter a email"
          keyboard="email-address"
        />
        <TextField placeholder="Please enter a password" type="password" />
        <Button
          btnText="Join ABZ"
          btnTextColor="black"
          btnColor="orange"
          redirect={() => props.setPage("Home")}
        />
        <View>
          <Pressable onPress={() => props.setPage("SignIn")}>
            <Text style={global.link}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

SignUp.propTypes = {
  setPage: PropTypes.func,
};

const global = StyleSheet.create(globalStyles);

export default SignUp;