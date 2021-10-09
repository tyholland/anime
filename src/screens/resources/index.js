import React from "react";
import resourceStyles from "./resources.json";
import globalStyles from "../../../global.json";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Platform,
  Linking,
} from "react-native";
import PropTypes from "prop-types";
import BackLink from "../../components/back-link";

const Resources = (props) => {
  const handleLink = async (url) => {
    await Linking.openURL(url);
  };

  return (
    <View
      style={[
        global.container,
        Platform.OS === "ios"
          ? global.iosHeaderBeginning
          : global.androidHeaderBeginning,
      ]}
    >
      <BackLink redirect={() => props.setPage("Settings")} />
      <View style={styles.contentLinks}>
        <Pressable
          onPress={() => handleLink("https://www.buzzsprout.com/1260827")}
        >
          <Text style={styles.link}>ABZ Podcast Episodes</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable
          onPress={() =>
            handleLink(
              "https://youtube.com/channel/UC6ZyoS8aagLeSq2CldEGfXw?sub_confirmation=1"
            )
          }
        >
          <Text style={styles.link}>ABZ Youtube Videos</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable
          onPress={() => handleLink("https://www.instagram.com/animebrothaz/")}
        >
          <Text style={styles.link}>ABZ Instagram</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable
          onPress={() => handleLink("https://m.facebook.com/animebrothaz")}
        >
          <Text style={styles.link}>ABZ Facebook</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable
          onPress={() => handleLink("https://mobile.twitter.com/animebrothaz")}
        >
          <Text style={styles.link}>ABZ Twitter</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable
          onPress={() => handleLink("https://www.tiktok.com/@animebrothaz")}
        >
          <Text style={styles.link}>ABZ TikTok</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable onPress={() => handleLink("http://paypal.me/animebrothaz")}>
          <Text style={styles.link}>Support ABZ</Text>
        </Pressable>
      </View>
    </View>
  );
};

Resources.propTypes = {
  setPage: PropTypes.func,
};

const styles = StyleSheet.create(resourceStyles);
const global = StyleSheet.create(globalStyles);

export default Resources;
