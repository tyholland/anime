import React from "react";
import globalStyles from "../../../global.json";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  ScrollView,
  Platform,
  Modal,
} from "react-native";
import Button from "../../components/button";
import TextField from "../../components/text-field";
import PropTypes from "prop-types";

const ForgotPassword = (props) => {
  return (
    <ScrollView centerContent={true}>
      <View
        style={[
          global.container,
          Platform.OS !== "ios" && global.centerContent,
        ]}
      >
        <View>
          <Text style={global.title}>Forgot Your Password</Text>
        </View>
        <TextField placeholder="Enter your email" keyboard="email-address" />
        <Button
          btnText="Get Temporary Password"
          btnTextColor="black"
          btnColor="orange"
          redirect={() => props.setPage("SignIn")}
        />
        <View>
          <Pressable onPress={() => props.setPage("SignIn")}>
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

ForgotPassword.propTypes = {
  setPage: PropTypes.func,
};

const global = StyleSheet.create(globalStyles);

export default ForgotPassword;
