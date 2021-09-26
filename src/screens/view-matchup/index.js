import React from "react";
import matchupStyles from "./view-matchup.json";
import globalStyles from "../../../global.json";
import { StyleSheet, View, Pressable, Text, ScrollView, Platform } from "react-native";

const ViewMatchup = () => {
  return (
    <View style={Platform.OS === 'ios' ? global.iosHeaderBeginning : global.androidHeaderBeginning}>
      <ScrollView>
        <View style={styles.matchup}>
          <View style={styles.teamContent}>
            <Text style={styles.teamName}>Jack Of All Trades</Text>
            <Text style={styles.teamTotal}>9000</Text>
          </View>
          <View style={styles.teamContent}>
            <Text style={styles.teamName}>Z Fighters</Text>
            <Text style={styles.teamTotal}>9000</Text>
          </View>
        </View>
        <View style={[Platform.OS === 'ios' ? global.iosFooterEnding : global.androidFooterEnding, styles.teamSplit]}>
          <View style={styles.column}>
            <View style={styles.section}>
              <View style={styles.headliner}>
                <Text style={styles.character}>Goku</Text>
                <Text style={styles.affinity}>-</Text>
              </View>
              <Text style={styles.power}>1500</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.headliner}>
                <Text style={styles.character}>Arthur Boyle</Text>
                <Text style={styles.affinity}>
                  <View style={[global.circle, global.fireAffinity]}></View>
                </Text>
              </View>
              <Text style={styles.power}>1250</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.headliner}>
                <Text style={styles.character}>Genos</Text>
                <Text style={styles.affinity}>
                  <View style={[global.circle, global.fireAffinity]}></View>
                </Text>
              </View>
              <Text style={styles.power}>1250</Text>
            </View>
            <View style={styles.duoSection}>
              <View style={styles.headliner}>
                <Text style={styles.character}>Rock Lee</Text>
                <Text style={styles.affinity}>-</Text>
              </View>
              <Text style={styles.power}>1250</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.headliner}>
                <Text style={styles.character}>Tenten</Text>
                <Text style={styles.affinity}>-</Text>
              </View>
              <Text style={styles.power}>1000</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.headliner}>
                <Text style={styles.character}>Chad</Text>
                <Text style={styles.affinity}>-</Text>
              </View>
              <Text style={styles.power}>1000</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.headliner}>
                <Text style={styles.character}>Sasori</Text>
                <Text style={styles.affinity}>-</Text>
              </View>
              <Text style={styles.power}>1250</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.headliner}>
                <Text style={styles.character}>Soul Society</Text>
                <Text style={styles.affinity}>
                  <View style={[global.circle, global.arcaneAffinity]}></View>
                </Text>
              </View>
              <Text style={styles.power}>-</Text>
            </View>
          </View>
          <View style={styles.positionColumn}>
            <View style={styles.positionSection}>
              <Text style={styles.position}>C</Text>
            </View>
            <View style={styles.positionSection}>
              <Text style={styles.position}>B</Text>
            </View>
            <View style={styles.positionSection}>
              <Text style={styles.position}>B</Text>
            </View>
            <View style={styles.duoPositionSection}>
              <Text style={styles.duoPosition}>B/S</Text>
            </View>
            <View style={styles.positionSection}>
              <Text style={styles.position}>S</Text>
            </View>
            <View style={styles.positionSection}>
              <Text style={styles.position}>V</Text>
            </View>
            <View style={styles.positionSection}>
              <Text style={styles.position}>BF</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={[styles.section, styles.reverse]}>
              <View style={styles.headliner}>
                <Text style={[styles.character, styles.characterReverse]}>
                  Goku
                </Text>
                <Text style={[styles.affinity, styles.affinityReverseEmpty]}>
                  -
                </Text>
              </View>
              <Text style={[styles.power, styles.powerReverse]}>1500</Text>
            </View>
            <View style={[styles.section, styles.reverse]}>
              <View style={styles.headliner}>
                <Text style={[styles.character, styles.characterReverse]}>
                  Arthur Boyle
                </Text>
                <Text style={[styles.affinity, styles.affinityReverse]}>
                  <View style={[global.circle, global.fireAffinity]}></View>
                </Text>
              </View>
              <Text style={[styles.power, styles.powerReverse]}>1250</Text>
            </View>
            <View style={[styles.section, styles.reverse]}>
              <View style={styles.headliner}>
                <Text style={[styles.character, styles.characterReverse]}>
                  Genos
                </Text>
                <Text style={[styles.affinity, styles.affinityReverse]}>
                  <View style={[global.circle, global.fireAffinity]}></View>
                </Text>
              </View>
              <Text style={[styles.power, styles.powerReverse]}>1250</Text>
            </View>
            <View style={[styles.duoSection, styles.reverse]}>
              <View style={styles.headliner}>
                <Text style={[styles.character, styles.characterReverse]}>
                  Rock Lee
                </Text>
                <Text style={[styles.affinity, styles.affinityReverseEmpty]}>
                  -
                </Text>
              </View>
              <Text style={[styles.power, styles.powerReverse]}>1250</Text>
            </View>
            <View style={[styles.section, styles.reverse]}>
              <View style={styles.headliner}>
                <Text style={[styles.character, styles.characterReverse]}>
                  Tenten
                </Text>
                <Text style={[styles.affinity, styles.affinityReverseEmpty]}>
                  -
                </Text>
              </View>
              <Text style={[styles.power, styles.powerReverse]}>1000</Text>
            </View>
            <View style={[styles.section, styles.reverse]}>
              <View style={styles.headliner}>
                <Text style={[styles.character, styles.characterReverse]}>
                  Chad
                </Text>
                <Text style={[styles.affinity, styles.affinityReverseEmpty]}>
                  -
                </Text>
              </View>
              <Text style={[styles.power, styles.powerReverse]}>1000</Text>
            </View>
            <View style={[styles.section, styles.reverse]}>
              <View style={styles.headliner}>
                <Text style={[styles.character, styles.characterReverse]}>
                  Sasori
                </Text>
                <Text style={[styles.affinity, styles.affinityReverseEmpty]}>
                  -
                </Text>
              </View>
              <Text style={[styles.power, styles.powerReverse]}>1250</Text>
            </View>
            <View style={[styles.section, styles.reverse]}>
              <View style={styles.headliner}>
                <Text style={[styles.character, styles.characterReverse]}>
                  Soul Society
                </Text>
                <Text style={[styles.affinity, styles.affinityReverse]}>
                  <View style={[global.circle, global.arcaneAffinity]}></View>
                </Text>
              </View>
              <Text style={[styles.power, styles.powerReverse]}>-</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create(matchupStyles);
const global = StyleSheet.create(globalStyles);

export default ViewMatchup;
