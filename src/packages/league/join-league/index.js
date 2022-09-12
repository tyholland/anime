import React from 'react';
import globalStyles from '../../../global.json';
import { StyleSheet, View, Text, Platform } from 'react-native';
import Button from '../../../components/button';
import TextField from '../../../components/text-field';
import PropTypes from 'prop-types';
import BackLink from '../../../components/back-link';

const JoinLeague = (props) => {
  return (
    <View
      style={[
        global.container,
        Platform.OS === 'ios'
          ? global.iosHeaderBeginning
          : global.androidHeaderBeginning,
      ]}
    >
      <BackLink redirect={() => props.setPage('Home')} />
      <Text style={global.title}>Join League</Text>
      <Text style={global.subTitle}>
        Enter the code you were given below, to join your friend's league.
      </Text>
      <TextField placeholder="Enter your league code" />
      <Button
        btnText="Enter League"
        btnTextColor="black"
        btnColor="orange"
        redirect={() => {
          props.setPage('Team');
          props.setHasHeader(true);
        }}
      />
    </View>
  );
};

JoinLeague.propTypes = {
  setPage: PropTypes.func,
  setHasHeader: PropTypes.func,
};

const global = StyleSheet.create(globalStyles);

export default JoinLeague;
