import React from "react";
import globalStyles from "../../../global.json";
import { StyleSheet, View, Text, ScrollView, Platform } from "react-native";
import Button from "../../components/button";
import TextField from "../../components/text-field";

const VoteMatchup = () => {
  return (
    <ScrollView centerContent={true}>
      <View
        style={[
          global.container,
          Platform.OS !== "ios" && global.centerContent,
        ]}
      >
        <View>
          <Text style={global.title}>Vote on Matchup</Text>
        </View>
        <View>
          <Text style={global.subTitle}>
            Enter the code you were given below, to vote on the head-to-head
            matchup.
          </Text>
        </View>
        <TextField placeholder="Enter your voting code" />
        <Button
          btnText="Make Your Vote"
          btnTextColor="black"
          btnColor="orange"
        />
      </View>
    </ScrollView>
  );
};

const global = StyleSheet.create(globalStyles);

export default VoteMatchup;
