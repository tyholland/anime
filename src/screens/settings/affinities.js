import React from "react";
import affinityStyles from "./settings.json";
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

const Affinities = (props) => {
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
          <Text style={styles.label}>Week 1 - Fire</Text>
          <Text style={styles.subLabel}>Power Boost: 250</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Week 2 - Water</Text>
          <Text style={styles.subLabel}>Power Boost: 300</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Week 3 - Earth</Text>
          <Text style={styles.subLabel}>Power Boost: 300</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Week 4 - Wind</Text>
          <Text style={styles.subLabel}>Power Boost: 250</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Week 5 - Arcane</Text>
          <Text style={styles.subLabel}>Power Boost: 200</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Week 6 - Darkness</Text>
          <Text style={styles.subLabel}>Power Boost: 250</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Week 7 - Celestial</Text>
          <Text style={styles.subLabel}>Power Boost: 300</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Week 8 - Ice</Text>
          <Text style={styles.subLabel}>Power Boost: 300</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Week 9 - Electric</Text>
          <Text style={styles.subLabel}>Power Boost: 250</Text>
        </View>
        <Text style={global.title}>PlayOffs</Text>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Week 10 - Hurricane</Text>
          <Text style={styles.subLabel}>Wind Boost: 250</Text>
          <Text style={styles.subLabel}>Water Boost: 300</Text>
        </View>
        <Text style={global.title}>Semi-Finals</Text>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Week 11 - ShadowFrost</Text>
          <Text style={styles.subLabel}>Darkness Boost: 250</Text>
          <Text style={styles.subLabel}>Ice Boost: 300</Text>
        </View>
        <Text style={global.title}>Finals</Text>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Week 12 - Mana Blaze</Text>
          <Text style={styles.subLabel}>Arcane Boost: 200</Text>
          <Text style={styles.subLabel}>Fire Boost: 250</Text>
        </View>
      </ScrollView>
    </View>
  );
};

Affinities.propTypes = {
  setPage: PropTypes.func,
};

const styles = StyleSheet.create(affinityStyles);
const global = StyleSheet.create(globalStyles);

export default Affinities;
