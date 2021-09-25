import React from "react";
import signStyles from "./sign-up.json";
import globalStyles from "../../../global.json";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

const SignUp = () => {
  return (
    <ScrollView centerContent={true}>
      <View style={global.container}>
        <View>
          <Text style={global.title}>Join ABZ's</Text>
          <Text style={global.title}>Anime Fantasy League</Text>
        </View>
        <KeyboardAvoidingView>
          <View>
            <TextInput
              placeholder="Please enter a email"
              keyboardType={"email-address"}
              autoCapitalize="none"
              style={global.textField}
            />
          </View>
          <View>
            <TextInput
              placeholder="Please enter a password"
              style={global.textField}
              textContentType={"password"}
              secureTextEntry={true}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={global.submit}>
          <Pressable style={global.primaryBtn}>
            <Text style={global.secondaryBtnText}>Join ABZ</Text>
          </Pressable>
        </View>
        <View>
          <Pressable>
            <Text style={global.link}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(signStyles);
const global = StyleSheet.create(globalStyles);

export default SignUp;
