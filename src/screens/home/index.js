import React from "react";
import globalStyles from "../../../global.json";
import { StyleSheet, View, Text, ScrollView, Platform } from "react-native";
import Button from "../../components/button";
import PropTypes from "prop-types";

const Home = (props) => {
  return (
    <ScrollView centerContent={true}>
      <View
        style={[
          global.container,
          Platform.OS !== "ios" && global.centerContent,
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
        />
        <Button btnText="Join a League" btnTextColor="white" btnColor="blue" />
        <Button
          btnText="Create a League"
          btnTextColor="black"
          btnColor="orange"
        />
      </View>
    </ScrollView>
  );
};

Home.propTypes = {
  setPage: PropTypes.func,
};

const global = StyleSheet.create(globalStyles);

export default Home;
