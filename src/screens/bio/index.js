import React from "react";
import bioStyles from "./bio.json";
import globalStyles from "../../../global.json";
import { StyleSheet, View, Text } from "react-native";
import Button from "../../components/button";
import BackLink from "../../components/back-link";
import PropTypes from "prop-types";

const Bio = (props) => {
  return (
    <View style={[global.iosHeaderBeginning, global.container]}>
      <BackLink redirect={() => props.setPage("Team")} />
      <View>
        <Text style={styles.title}>Natsu</Text>
        <Text style={styles.subTitle}>Anime Series: DBZ</Text>
        <Text style={styles.attribute}>Rank:</Text>
        <Text style={styles.subAttribute}>Captain</Text>
        <Text style={styles.attribute}>Power Level:</Text>
        <Text style={styles.subAttribute}>1500</Text>
        <Text style={styles.attribute}>Element Affinity:</Text>
        <View style={[styles.affinity, styles.spaceDown]}>
          <View style={[styles.affinity, styles.spaceRight]}>
            <View style={[global.circle, global.fireAffinity]}></View>
            <Text style={styles.affinityText}>Fire</Text>
          </View>
          <View style={[styles.affinity, styles.spaceRight]}>
            <View style={[global.circle, global.darknessAffinity]}></View>
            <Text style={styles.affinityText}>Darkness</Text>
          </View>
        </View>
        <Text style={styles.attribute}>Element Weakness:</Text>
        <View style={styles.affinity}>
          <View style={styles.affinity}>
            <View style={[global.circle, global.waterAffinity]}></View>
            <Text style={styles.affinityText}>Water</Text>
          </View>
        </View>
      </View>
      <Button
        btnText="Drop Character"
        btnTextColor="white"
        btnColor="red"
        customBtnColor={styles.dropBtn}
        customBtnTextColor={styles.dropBtnText}
      />
    </View>
  );
};

Bio.propTypes = {
  setPage: PropTypes.func,
};

const styles = StyleSheet.create(bioStyles);
const global = StyleSheet.create(globalStyles);

export default Bio;
