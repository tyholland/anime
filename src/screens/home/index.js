import React from "react";
import globalStyles from "../../../global.json";
import { StyleSheet, View, Text, Platform, Alert } from "react-native";
import Button from "../../components/button";
import PropTypes from "prop-types";

const Home = (props) => {
  return (
    <View
      style={[
        global.container,
        Platform.OS === "ios"
        ? global.iosHeaderBeginning
        : global.androidHeaderBeginning,
      ]}
    >
      <View>
        <Text style={global.title}>Choose Your Path</Text>
      </View>
      <Button
        btnText="View Your League(s)"
        btnTextColor="yellow"
        btnColor="black"
        redirect={() => props.setPage("ViewLeague")}
      />
      <Button
        btnText="Vote on a Matchup"
        btnTextColor="black"
        btnColor="yellow"
        redirect={() => props.setPage("VoteMatchup")}
      />
      <Button
        btnText="Join a League"
        btnTextColor="white"
        btnColor="blue"
        redirect={() => props.setPage("JoinLeague")}
      />
      <Button
        btnText="Create a League"
        btnTextColor="black"
        btnColor="orange"
        redirect={() => Alert.alert("This page hasn't been created yet")}
      />
    </View>
  );
};

Home.propTypes = {
  setPage: PropTypes.func,
};

const global = StyleSheet.create(globalStyles);

export default Home;
