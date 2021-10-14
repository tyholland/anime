import React from "react";
import lossStyles from "./settings.json";
import globalStyles from "../../../global.json";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  ScrollView,
} from "react-native";
import PropTypes from "prop-types";
import BackLink from "../../components/back-link";

const Loss = (props) => {
  return (
    <View
      style={[
        global.container,
        Platform.OS === "ios"
          ? global.iosHeaderBeginning
          : global.androidHeaderBeginning,
      ]}
    >
      <BackLink redirect={() => props.setPage("LeagueSettings")} />
      <ScrollView style={styles.scrollPadding}>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Weekly Element Affinity</Text>
          <Text>Characters with the same weakness as the Weekly Element Affinity will recieve damage. The character will lose a percentage of the Weekly Element Affinity power boost. Characters that will receieve damage are Captains and Brawlers.</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Villains</Text>
          <Text>Characters with the same weakness as the Villain's Affinity will lose points. The character will lose a percentage of the Villain's damage. Characters that will receieve damage are Captains and Brawlers.</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Battlefield</Text>
          <Text>Characters with the same weakness as the Battlefield will recieve damage. A Battlefield can also damage allied characters without an Affinity. The character will lose a percentage of the Battlefield power boost. Characters that can be affected by this boost are Captains, Brawlers, Support, and Villains.</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>User Voting</Text>
          <Text>Characters in a specific Head-to-Head Battle can recieve damage. The character will lose the full amount of the User Voting power loss. Characters that can be affected by this boost are Captains, Brawlers, Support, and Villains.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

Loss.propTypes = {
  setPage: PropTypes.func,
};

const styles = StyleSheet.create(lossStyles);
const global = StyleSheet.create(globalStyles);

export default Loss;
