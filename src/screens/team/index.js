import React from "react";
import teamStyles from "./team.json";
import globalStyles from "../../../global.json";
import { StyleSheet, View, Pressable, Text, ScrollView } from "react-native";

const Team = () => {
  return (
    <View style={[global.headerBeginning, styles.containerTop]}>
      <ScrollView>
        <View style={styles.teamContent}>
          <Text style={styles.teamName}>Jack Of All Trades</Text>
          <Text style={styles.league}>Anime Ballers</Text>
          <Text style={styles.teamOwner}>John Smith</Text>
          <Text style={styles.teamRecord}>4-1</Text>
        </View>
        <View style={[styles.section, styles.headerSection]}>
          <Text style={[styles.position, styles.none]}></Text>
          <Text style={[styles.character, styles.bold]}>Starters</Text>
          <Text style={[styles.affinity, styles.bold]}>Affinity</Text>
          <Text style={[styles.power, styles.bold]}>Power Level</Text>
        </View>
        <View>
          <View style={styles.section}>
            <Text style={styles.position}>C</Text>
            <Text style={styles.character}>Goku</Text>
            <Text style={styles.affinity}>-</Text>
            <Text style={styles.power}>1500</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>B</Text>
            <Text style={styles.character}>Arthur Boyle</Text>
            <Text style={styles.affinity}>
              <View style={[global.circle, global.fireAffinity]}></View>
            </Text>
            <Text style={styles.power}>1250</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>B</Text>
            <Text style={styles.character}>Genos</Text>
            <Text style={styles.affinity}>
              <View style={[global.circle, global.fireAffinity]}></View>
            </Text>
            <Text style={styles.power}>1250</Text>
          </View>
          <View style={styles.section}>
            <Text style={[styles.position, styles.duo]}>B/S</Text>
            <View style={styles.character}>
              <Text style={styles.duoText}>Rock Lee</Text>
              <Text style={styles.duoText}>Tenten</Text>
            </View>
            <View style={styles.affinity}>
              <Text>-</Text>
              <Text>-</Text>
            </View>
            <View style={styles.power}>
              <Text style={global.right}>1250</Text>
              <Text style={global.right}>1000</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>S</Text>
            <Text style={styles.character}>Chad</Text>
            <Text style={styles.affinity}>-</Text>
            <Text style={styles.power}>1000</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>V</Text>
            <Text style={styles.character}>Sasori</Text>
            <Text style={styles.affinity}>-</Text>
            <Text style={styles.power}>1250</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>BF</Text>
            <Text style={styles.character}>Soul Society</Text>
            <Text style={styles.affinity}>
              <View style={[global.circle, global.arcaneAffinity]}></View>
            </Text>
            <Text style={styles.power}>-</Text>
          </View>
        </View>
        <View style={styles.total}>
          <Text style={[styles.totalText, styles.bold]}>Total</Text>
          <Text style={[styles.totalAmount, styles.bold]}>9000</Text>
        </View>
        <View style={[styles.section, styles.headerSection]}>
          <Text style={[styles.position, styles.none]}></Text>
          <Text style={[styles.character, styles.bold]}>Bench</Text>
          <Text style={[styles.affinity, styles.bold]}>Affinity</Text>
          <Text style={[styles.power, styles.bold]}>Power Level</Text>
        </View>
        <View style={[global.footerEnding, styles.containerBottom]}>
          <View style={styles.section}>
            <Text style={styles.position}>BN</Text>
            <Text style={styles.character}>Erza Scarlet</Text>
            <Text style={styles.affinity}>-</Text>
            <Text style={styles.power}>1500</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>BN</Text>
            <Text style={styles.character}>Endeavor</Text>
            <Text style={styles.affinity}>
              <View style={[global.circle, global.fireAffinity]}></View>
            </Text>
            <Text style={styles.power}>1250</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>BN</Text>
            <Text style={styles.character}>Shino Aburame</Text>
            <Text style={styles.affinity}>-</Text>
            <Text style={styles.power}>1250</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>BN</Text>
            <Text style={styles.character}>Lucy Heartfelia</Text>
            <Text style={styles.affinity}>-</Text>
            <Text style={styles.power}>1000</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>BN</Text>
            <Text style={styles.character}>Boros</Text>
            <Text style={styles.affinity}>-</Text>
            <Text style={styles.power}>1250</Text>
          </View>
        </View>
      </ScrollView>
      <Pressable style={[global.primaryBtn, styles.editBtn]}>
        <Text style={global.secondaryBtnText}>Edit Team</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create(teamStyles);
const global = StyleSheet.create(globalStyles);

export default Team;
