import React from 'react';
import boostStyles from './settings.json';
import globalStyles from '../../../global.json';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import BackLink from '../back-link';

const Boost = (props) => {
  return (
    <View
      style={[
        global.container,
        Platform.OS === 'ios'
          ? global.iosHeaderBeginning
          : global.androidHeaderBeginning,
      ]}
    >
      <BackLink redirect={() => props.setPage('LeagueSettings')} />
      <ScrollView style={styles.scrollPadding}>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Weekly Element Affinity</Text>
          <Text>Characters with the same Affinity as the Weekly Element Affinity will recieve a boost. The character will recieve a percentage of the Weekly Element Affinity power boost. Characters that are affected by this boost are Captains and Brawlers.</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Support Character</Text>
          <Text>Support characters can boost allied characters. An allied character will recieve a percentage of the Support character's power boost. Characters will also have the chance to recieve a double boost if the Support character has two Affinities and the character has both of the same Affinities. Characters that are affected by this boost are Captains and Brawlers. However, Brawlers that are in the 2v2 Battle, are not affected by a normal Support Character.</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Support Character in 2v2 Battle</Text>
          <Text>Support characters in a 2v2 Battle can only boost the Brawler they are teamed up with. The Brawler will recieve a percentage of that Support character's power boost. The Brawler will also have the chance to recieve a double boost if the Support character has two Affinities and the Brawler has both of the same Affinities. Captains and other Brawlers, not in the 2v2 Battle, will not be affected by the Support character in a 2v2 Battle.</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Battlefield</Text>
          <Text>Characters with the same Affinity as the Battlefield will recieve a boost. A Battlefield can also boost an allied character without an Affinity. The character will recieve a percentage of the Battlefield power boost. Characters will also have the chance to recieve a double boost if the Battlefield has two Affinities and the character has both of the same Affinities. Characters that can be affected by this boost are Captains, Brawlers, Support, and Villains.</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>User Voting</Text>
          <Text>Characters in a specific Head-to-Head Battle can recieve a boost. The character will recieve a the full amount of the User Voting power boost. Characters that can be affected by this boost are Captains, Brawlers, Support, and Villains.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

Boost.propTypes = {
  setPage: PropTypes.func,
};

const styles = StyleSheet.create(boostStyles);
const global = StyleSheet.create(globalStyles);

export default Boost;
