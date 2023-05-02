import React from 'react';
import { $Input } from './text-field.style.js';

const TextField = ({
  placeholder,
  keyboard,
  type,
  onChange,
  isDisabled = false,
  inputVal = null,
  maxLength = 'auto',
  onKeyDown,
}) => {
  const isPassword = type === 'password';

  if (onChange) {
    return (
      <$Input
        placeholder={placeholder}
        keyboardType={keyboard || 'default'}
        autoCapitalize="none"
        type={isPassword ? type : 'none'}
        secureTextEntry={isPassword}
        onChange={(input) => onChange(input.target.value)}
        maxLength={maxLength}
        defaultValue={inputVal}
        onKeyDown={onKeyDown}
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
        maxLength={maxLength}
      />
    );
  }

  return (
    <$Input
      placeholder={placeholder}
      keyboardType={keyboard || 'default'}
      autoCapitalize="none"
      secureTextEntry={isPassword}
      type={isPassword ? type : 'none'}
      defaultValue={inputVal}
      onKeyDown={onKeyDown}
    />
  );
};

export default TextField;
