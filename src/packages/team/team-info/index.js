import React, { useState } from 'react';
import teamStyles from './team-info.json';
import globalStyles from '../../../global.json';
import { StyleSheet, View, Text, Platform } from 'react-native';
import Button from '../../../components/button';
import PropTypes from 'prop-types';
import TextField from '../../../components/text-field';
import BackLink from '../../../components/back-link';

const TeamInfo = (props) => {
  const [edit, setEdit] = useState(false);

  return (
    <View
      style={[
        global.container,
        Platform.OS === 'ios'
          ? global.iosHeaderBeginning
          : global.androidHeaderBeginning,
      ]}
    >
      <BackLink redirect={() => props.setPage('Team')} />
      <Text style={global.title}>Update Team Info</Text>
      <Text style={styles.title}>Team Name:</Text>
      {edit ? (
        <TextField placeholder="Enter Team Name" />
      ) : (
        <Text style={styles.content}>Jack Of All Trades</Text>
      )}
      <Text style={styles.title}>Your Name:</Text>
      {edit ? (
        <TextField placeholder="Enter Your Name" />
      ) : (
        <Text style={styles.content}>John Smith</Text>
      )}
      <Button
        btnText={edit ? 'Save' : 'Edit'}
        btnTextColor="black"
        btnColor="orange"
        redirect={() => setEdit(!edit)}
      />
    </View>
  );
};

TeamInfo.propTypes = {
  setPage: PropTypes.func,
};

const styles = StyleSheet.create(teamStyles);
const global = StyleSheet.create(globalStyles);

export default TeamInfo;
