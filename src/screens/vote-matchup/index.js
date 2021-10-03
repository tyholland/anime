import React from "react";
import globalStyles from "../../../global.json";
import { StyleSheet, View, Text, Platform } from "react-native";
import Button from "../../components/button";
import TextField from "../../components/text-field";
import PropTypes from "prop-types";
import BackLink from "../../components/back-link";

const VoteMatchup = (props) => {
  return (
    <View
      style={[
        global.container,
        Platform.OS === "ios"
          ? global.iosHeaderBeginning
          : global.androidHeaderBeginning,
      ]}
    >
      <BackLink redirect={() => props.setPage("Home")} />
      <Text style={global.title}>Vote on Matchup</Text>
      <Text style={global.subTitle}>
        Enter the code you were given below, to vote on the head-to-head
        matchup.
      </Text>
      <TextField placeholder="Enter your voting code" />
      <Button
        btnText="Make Your Vote"
        btnTextColor="black"
        btnColor="orange"
        redirect={() => props.setPage("Vote")}
      />
    </View>
  );
};

VoteMatchup.propTypes = {
  setPage: PropTypes.func,
};

const global = StyleSheet.create(globalStyles);

export default VoteMatchup;
