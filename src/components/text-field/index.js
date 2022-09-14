import React from 'react';
import { $Input } from './text-field.style.js';

const TextField = ({ placeholder, keyboard, type }) => {
  const isPassword = type === 'password';

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
