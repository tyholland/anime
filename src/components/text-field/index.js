import React from 'react';
import { $Input } from './text-field.style.js';

const TextField = ({
  placeholder,
  keyboard,
  type,
  onChange,
  isDisabled = false,
  inputVal = null,
}) => {
  const isPassword = type === 'password';

  if (onChange) {
    return (
      <$Input
        placeholder={placeholder}
        keyboardType={keyboard || 'default'}
        autoCapitalize="none"
        textContentType={isPassword ? type : 'none'}
        secureTextEntry={isPassword}
        onChange={(input) => onChange(input.target.value)}
      />
    );
  }

  if (isDisabled) {
    return (
      <$Input
        keyboardType={keyboard || 'default'}
        autoCapitalize="none"
        textContentType={'none'}
        disabled={isDisabled}
        value={inputVal}
      />
    );
  }

  return (
    <$Input
      placeholder={placeholder}
      keyboardType={keyboard || 'default'}
      autoCapitalize="none"
      textContentType={isPassword ? type : 'none'}
      secureTextEntry={isPassword}
    />
  );
};

export default TextField;
