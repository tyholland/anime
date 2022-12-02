import React from 'react';
import globalStyles from '../../../global.json';
import { StyleSheet, View, Pressable, Text, Platform } from 'react-native';
import Button from '../../components/button';
import PropTypes from 'prop-types';
import TextField from '../../components/text-field';

const SignUp = (props) => {
  return (
    <View
      style={[
        global.container,
        Platform.OS === 'ios'
          ? global.iosHeaderBeginning
          : global.androidHeaderBeginning,
      ]}
    >
      <Text style={global.title}>Join ABZ's</Text>
      <Text style={global.title}>Anime Fantasy League</Text>
      <TextField placeholder="Please enter a email" keyboard="email-address" />
      <TextField placeholder="Please enter a password" type="password" />
      <Button
        btnText="Join ABZ"
        btnTextColor="black"
        btnColor="orange"
        redirect={() => props.setPage('Home')}
      />
      <Pressable onPress={() => props.setPage('SignIn')}>
        <Text style={global.link}>Sign In</Text>
      </Pressable>
    </View>
  );
};

SignUp.propTypes = {
  setPage: PropTypes.func,
};

const global = StyleSheet.create(globalStyles);

export default SignUp;
