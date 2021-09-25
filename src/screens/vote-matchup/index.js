import React from "react";
import voteStyles from "./vote-matchup.json";
import globalStyles from "../../../global.json";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Pressable,
  Text,
  TextInput,
  ScrollView,
} from "react-native";

const VoteMatchup = () => {
  return (
    <ScrollView centerContent={true}>
      <View style={global.container}>
        <View>
          <Text style={global.title}>Vote on Matchup</Text>
        </View>
        <View>
          <Text style={global.subTitle}>
            Enter the code you were given below, to vote on the head-to-head
            matchup.
          </Text>
        </View>
        <KeyboardAvoidingView>
          <View>
            <TextInput
              placeholder="Enter your voting code"
              style={global.textField}
              autoCapitalize="none"
            />
          </View>
        </KeyboardAvoidingView>
        <View style={global.submit}>
          <Pressable style={global.primaryBtn}>
            <Text style={global.secondaryBtnText}>Make Your Vote</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(voteStyles);
const global = StyleSheet.create(globalStyles);

export default VoteMatchup;
