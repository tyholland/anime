import React from 'react';
import { $Input } from './text-field.style.js';

const TextField = ({ placeholder, keyboard, type, onChange }) => {
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
