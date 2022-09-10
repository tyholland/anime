import React from 'react';
import textStyles from './text-field.json';
import { StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const TextField = (props) => {
  return (
    <KeyboardAvoidingView>
      <TextInput
        placeholder={props.placeholder}
        style={styles.textField}
        keyboardType={props.keyboard ? props.keyboard : 'default'}
        autoCapitalize="none"
        textContentType={props.type === 'password' ? 'password' : 'none'}
        secureTextEntry={props.type === 'password'}
      />
    </KeyboardAvoidingView>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  keyboard: PropTypes.string,
  type: PropTypes.string,
};

const styles = StyleSheet.create(textStyles);

export default TextField;
