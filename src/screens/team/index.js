import React from "react";
import teamStyles from "./team.json";
import globalStyles from "../../../global.json";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Platform,
  Pressable,
} from "react-native";
import Button from "../../components/button";
import PropTypes from "prop-types";

const Team = (props) => {
  return (
    <View
      style={[
        Platform.OS === "ios"
          ? global.iosHeaderBeginning
          : global.androidHeaderBeginning,
        styles.containerTop,
      ]}
    >
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
            <Pressable
              onPress={() => props.setPage("Bio")}
              style={styles.character}
            >
              <Text style={styles.characterTxt}>Goku</Text>
            </Pressable>
            <Text style={styles.affinity}>-</Text>
            <Text style={styles.power}>1500</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>B</Text>
            <Pressable
              onPress={() => props.setPage("Bio")}
              style={styles.character}
            >
              <Text style={styles.characterTxt}>Arthur Boyle</Text>
            </Pressable>
            <Text style={styles.affinity}>
              <View style={[global.circle, global.fireAffinity]}></View>
            </Text>
            <Text style={styles.power}>1250</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>B</Text>
            <Pressable
              onPress={() => props.setPage("Bio")}
              style={styles.character}
            >
              <Text style={styles.characterTxt}>Genos</Text>
            </Pressable>
            <Text style={styles.affinity}>
              <View style={[global.circle, global.fireAffinity]}></View>
            </Text>
            <Text style={styles.power}>1250</Text>
          </View>
          <View style={styles.section}>
            <Text style={[styles.position, styles.duo]}>B/S</Text>
            <View style={styles.character}>
              <Pressable onPress={() => props.setPage("Bio")}>
                <Text style={styles.duoText}>Rock Lee</Text>
              </Pressable>
              <Pressable onPress={() => props.setPage("Bio")}>
                <Text style={styles.duoText}>Tenten</Text>
              </Pressable>
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
            <Pressable
              onPress={() => props.setPage("Bio")}
              style={styles.character}
            >
              <Text style={styles.characterTxt}>Chad</Text>
            </Pressable>
            <Text style={styles.affinity}>-</Text>
            <Text style={styles.power}>1000</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>V</Text>
            <Pressable
              onPress={() => props.setPage("Bio")}
              style={styles.character}
            >
              <Text style={styles.characterTxt}>Sasori</Text>
            </Pressable>
            <Text style={styles.affinity}>-</Text>
            <Text style={styles.power}>1250</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>BF</Text>
            <Pressable
              onPress={() => props.setPage("Bio")}
              style={styles.character}
            >
              <Text style={styles.characterTxt}>Soul Society</Text>
            </Pressable>
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
        <View
          style={
            Platform.OS === "ios"
              ? styles.iosContainerBottom
              : styles.androidContainerBottom
          }
        >
          <View style={styles.section}>
            <Text style={styles.position}>BN</Text>
            <Pressable
              onPress={() => props.setPage("Bio")}
              style={styles.character}
            >
              <Text style={styles.characterTxt}>Erza Scarlet</Text>
            </Pressable>
            <Text style={styles.affinity}>-</Text>
            <Text style={styles.power}>1500</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>BN</Text>
            <Pressable
              onPress={() => props.setPage("Bio")}
              style={styles.character}
            >
              <Text style={styles.characterTxt}>Endeavor</Text>
            </Pressable>
            <Text style={styles.affinity}>
              <View style={[global.circle, global.fireAffinity]}></View>
            </Text>
            <Text style={styles.power}>1250</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>BN</Text>
            <Pressable
              onPress={() => props.setPage("Bio")}
              style={styles.character}
            >
              <Text style={styles.characterTxt}>Shino Aburame</Text>
            </Pressable>
            <Text style={styles.affinity}>-</Text>
            <Text style={styles.power}>1250</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>BN</Text>
            <Pressable
              onPress={() => props.setPage("Bio")}
              style={styles.character}
            >
              <Text style={styles.characterTxt}>Lucy Heartfelia</Text>
            </Pressable>
            <Text style={styles.affinity}>-</Text>
            <Text style={styles.power}>1000</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.position}>BN</Text>
            <Pressable
              onPress={() => props.setPage("Bio")}
              style={styles.character}
            >
              <Text style={styles.characterTxt}>Boros</Text>
            </Pressable>
            <Text style={styles.affinity}>-</Text>
            <Text style={styles.power}>1250</Text>
          </View>
        </View>
      </ScrollView>
      <Button
        btnText="Join ABZ"
        btnTextColor="black"
        btnColor="orange"
        customBtnColor={styles.editBtn}
        viewStyle={Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn}
      />
    </View>
  );
};

Team.propTypes = {
  setPage: PropTypes.func,
};

const styles = StyleSheet.create(teamStyles);
const global = StyleSheet.create(globalStyles);

export default Team;
