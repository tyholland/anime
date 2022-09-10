import React from 'react';
import backStyles from './back-link.json';
import { StyleSheet, Pressable, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';

const BackLink = (props) => {
  return (
    <Pressable
      style={
        Platform.OS === 'ios' ? styles.iosBackLink : styles.androidBackLink
      }
      onPress={props.redirect}
    >
      <Text style={styles.link}>&lt; Back</Text>
    </Pressable>
  );
};

BackLink.propTypes = {
  redirect: PropTypes.func,
};

const styles = StyleSheet.create(backStyles);

export default BackLink;
