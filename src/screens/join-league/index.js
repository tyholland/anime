import React from "react";
import joinStyles from "./join-league.json";
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

const JoinLeague = () => {
  return (
    <ScrollView centerContent={true}>
      <View style={global.container}>
        <View>
          <Text style={global.title}>Join League</Text>
        </View>
        <View>
          <Text style={global.subTitle}>
            Enter the code you were given below, to join your friend's league.
          </Text>
        </View>
        <KeyboardAvoidingView>
          <View>
            <TextInput
              placeholder="Enter your league code"
              style={global.textField}
              autoCapitalize="none"
            />
          </View>
        </KeyboardAvoidingView>
        <View style={global.submit}>
          <Pressable style={global.primaryBtn}>
            <Text style={global.secondaryBtnText}>Enter League</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(joinStyles);
const global = StyleSheet.create(globalStyles);

export default JoinLeague;
