import React from 'react';
import globalStyles from '../../../global.json';
import { StyleSheet, View, Text, ScrollView, Platform } from 'react-native';
import Leagues from '../../components/leagues';
import PropTypes from 'prop-types';
import BackLink from '../../components/back-link';

const ViewLeague = (props) => {
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
      <ScrollView>
        <Text style={global.title}>Your Leagues</Text>
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={props.setPage}
          setHeader={props.setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={props.setPage}
          setHeader={props.setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={props.setPage}
          setHeader={props.setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={props.setPage}
          setHeader={props.setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={props.setPage}
          setHeader={props.setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={props.setPage}
          setHeader={props.setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={props.setPage}
          setHeader={props.setHasHeader}
        />
      </ScrollView>
    </View>
  );
};

ViewLeague.propTypes = {
  setPage: PropTypes.func,
  setHasHeader: PropTypes.func,
};

const global = StyleSheet.create(globalStyles);

export default ViewLeague;
