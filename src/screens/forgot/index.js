import React from "react";
import forgotStyles from "./forgot.json";
import globalStyles from "../../../global.json";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Pressable,
  Text,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";

const ForgotPassword = () => {
  return (
    <ScrollView centerContent={true}>
      <View style={global.container}>
        <View>
          <Text style={global.title}>Forgot Your Password</Text>
        </View>
        <KeyboardAvoidingView>
          <View>
            <TextInput
              placeholder="Enter your email"
              style={global.textField}
              keyboardType={"email-address"}
              autoCapitalize="none"
            />
          </View>
        </KeyboardAvoidingView>
        <View style={global.submit}>
          <Pressable style={global.primaryBtn}>
            <Text style={global.primaryBtnText}>Get Temporary Password</Text>
          </Pressable>
        </View>
        <View>
          <Pressable>
            <Text style={global.link}>Sign In</Text>
          </Pressable>
        </View>
        {/* <Modal animationType="slide" transparent={false} visible={isModalOpen}>
          <View style={styles.mobileNav}>
            <Pressable onPress={closeModal} style={styles.close}>
              <Text style={styles.mobileX}>x</Text>
            </Pressable>
            <Text style={styles.forgotText}>
              You will receive your new password via email in 48 hours.
            </Text>
            <Text style={styles.forgotText}>
              Thank you for using the Freedom App!!!
            </Text>
          </View>
        </Modal> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(forgotStyles);
const global = StyleSheet.create(globalStyles);

export default ForgotPassword;
