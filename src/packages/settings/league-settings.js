import React from 'react';
import leagueStyles from './settings.json';
import globalStyles from '../../../global.json';
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import BackLink from '../../components/back-link';

const LeagueSettings = (props) => {
  return (
    <View
      style={[
        global.container,
        Platform.OS === 'ios'
          ? global.iosHeaderBeginning
          : global.androidHeaderBeginning,
      ]}
    >
      <BackLink redirect={() => props.setPage('Settings')} />
      <View style={styles.contentLinks}>
        <Pressable>
          <Text style={styles.link}>Gameplay</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable onPress={() => props.setPage('Affinity')}>
          <Text style={styles.link}>Weekly Element Affinities</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable onPress={() => props.setPage('Boost')}>
          <Text style={styles.link}>Power Boosts</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable onPress={() => props.setPage('Loss')}>
          <Text style={styles.link}>Power Loss</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable onPress={() => props.setPage('Voting')}>
          <Text style={styles.link}>Voting Rules</Text>
        </Pressable>
      </View>
    </View>
  );
};

LeagueSettings.propTypes = {
  setPage: PropTypes.func,
};

const styles = StyleSheet.create(leagueStyles);
const global = StyleSheet.create(globalStyles);

export default LeagueSettings;