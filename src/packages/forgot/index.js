import React, { useState } from 'react';
import globalStyles from '../../../global.json';
import modalStyles from '../../../modal.json';
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Platform,
  Modal,
} from 'react-native';
import Button from '../../components/button';
import TextField from '../../components/text-field';
import PropTypes from 'prop-types';

const ForgotPassword = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <View
      style={[
        global.container,
        Platform.OS === 'ios'
          ? global.iosHeaderBeginning
          : global.androidHeaderBeginning,
      ]}
    >
      <Text style={global.title}>Forgot Your Password</Text>
      <TextField placeholder="Enter your email" keyboard="email-address" />
      <Button
        btnText="Get Temporary Password"
        btnTextColor="black"
        btnColor="orange"
        redirect={toggleModal}
      />
      <Pressable onPress={() => props.setPage('SignIn')}>
        <Text style={global.link}>Sign In</Text>
      </Pressable>
      <Modal animationType="slide" transparent={false} visible={isModalOpen}>
        <View style={modal.container}>
          <View style={modal.body}>
            <Text style={modal.contentText}>
              You will receive your new password via email in 48 hours.
            </Text>
          </View>
          <View style={modal.button}>
            <Button
              btnText="Close"
              btnTextColor="white"
              btnColor="red"
              redirect={() => props.setPage('SignIn')}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

ForgotPassword.propTypes = {
  setPage: PropTypes.func,
};

const global = StyleSheet.create(globalStyles);
const modal = StyleSheet.create(modalStyles);

export default ForgotPassword;
