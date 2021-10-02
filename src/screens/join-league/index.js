import React from "react";
import globalStyles from "../../../global.json";
import { StyleSheet, View, Text, ScrollView, Platform } from "react-native";
import Button from "../../components/button";
import TextField from "../../components/text-field";

const JoinLeague = () => {
  return (
    <ScrollView centerContent={true}>
      <View
        style={[
          global.container,
          Platform.OS !== "ios" && global.centerContent,
        ]}
      >
        <View>
          <Text style={global.title}>Join League</Text>
        </View>
        <View>
          <Text style={global.subTitle}>
            Enter the code you were given below, to join your friend's league.
          </Text>
        </View>
        <TextField placeholder="Enter your league code" />
        <Button btnText="Enter League" btnTextColor="black" btnColor="orange" />
      </View>
    </ScrollView>
  );
};

const global = StyleSheet.create(globalStyles);

export default JoinLeague;
