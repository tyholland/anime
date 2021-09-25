import React from "react";
import homeStyles from "./home.json";
import globalStyles from "../../../global.json";
import { StyleSheet, View, Pressable, Text, ScrollView } from "react-native";

const Home = () => {
  return (
    <ScrollView centerContent={true}>
      <View style={global.container}>
        <View>
          <Text style={global.title}>Choose Your Path</Text>
        </View>
        <View style={global.submit}>
          <Pressable style={global.fourthBtn}>
            <Text style={global.tertiaryBtnText}>View Your League(s)</Text>
          </Pressable>
        </View>
        <View style={global.submit}>
          <Pressable style={global.secondaryBtn}>
            <Text style={global.secondaryBtnText}>Vote on a Matchup</Text>
          </Pressable>
        </View>
        <View style={global.submit}>
          <Pressable style={global.tertiaryBtn}>
            <Text style={global.primaryBtnText}>Join a League</Text>
          </Pressable>
        </View>
        <View style={global.submit}>
          <Pressable style={global.primaryBtn}>
            <Text style={global.secondaryBtnText}>Create a League</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(homeStyles);
const global = StyleSheet.create(globalStyles);

export default Home;
