import React from "react";
import signStyles from "./sign-in.json";
import globalStyles from "../../../global.json";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  Platform,
} from "react-native";

const SignIn = () => {
  return (
    <ScrollView centerContent={true}>
      <View
        style={[
          global.container,
          Platform.OS !== "ios" && global.centerContent,
        ]}
      >
        <Image
          source={require("../../../assets/abz-logo.png")}
          style={Platform.OS === "ios" ? styles.iosImg : styles.andriodImg}
        />
        <Text style={global.title}>Anime Fantasy League</Text>
        <KeyboardAvoidingView>
          <View>
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              keyboardType={"email-address"}
              style={global.textField}
            />
          </View>
          <View>
            <TextInput
              placeholder="Password"
              textContentType={"password"}
              secureTextEntry={true}
              style={global.textField}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={global.submit}>
          <Pressable style={global.primaryBtn}>
            <Text style={global.secondaryBtnText}>Sign In</Text>
          </Pressable>
        </View>
        <View style={styles.contentLinks}>
          <Pressable>
            <Text style={global.link}>Sign Up</Text>
          </Pressable>
          <Text style={styles.split}>|</Text>
          <Pressable>
            <Text style={global.link}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(signStyles);
const global = StyleSheet.create(globalStyles);

export default SignIn;
