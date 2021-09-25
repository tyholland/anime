import React from "react";
import leagueStyles from "./view-league.json";
import globalStyles from "../../../global.json";
import { StyleSheet, View, Pressable, Text, ScrollView } from "react-native";

const ViewLeague = () => {
  return (
    <ScrollView>
      <View style={global.container}>
        <View style={styles.content}>
          <Text style={global.title}>Your Leagues</Text>
        </View>
        <View style={styles.league}>
          <View>
            <Text style={styles.textContent}>League Name</Text>
            <Text style={styles.textContent}>Team Name</Text>
          </View>
          <Pressable style={[global.primaryBtn, styles.viewBtn]}>
            <Text style={[global.secondaryBtnText, styles.viewBtnText]}>
              View Team
            </Text>
          </Pressable>
        </View>
        <View style={styles.league}>
          <View>
            <Text style={styles.textContent}>League Name</Text>
            <Text style={styles.textContent}>Team Name</Text>
          </View>
          <Pressable style={[global.primaryBtn, styles.viewBtn]}>
            <Text style={[global.secondaryBtnText, styles.viewBtnText]}>
              View Team
            </Text>
          </Pressable>
        </View>
        <View style={styles.league}>
          <View>
            <Text style={styles.textContent}>League Name</Text>
            <Text style={styles.textContent}>Team Name</Text>
          </View>
          <Pressable style={[global.primaryBtn, styles.viewBtn]}>
            <Text style={[global.secondaryBtnText, styles.viewBtnText]}>
              View Team
            </Text>
          </Pressable>
        </View>
        <View style={styles.league}>
          <View>
            <Text style={styles.textContent}>League Name</Text>
            <Text style={styles.textContent}>Team Name</Text>
          </View>
          <Pressable style={[global.primaryBtn, styles.viewBtn]}>
            <Text style={[global.secondaryBtnText, styles.viewBtnText]}>
              View Team
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(leagueStyles);
const global = StyleSheet.create(globalStyles);

export default ViewLeague;
