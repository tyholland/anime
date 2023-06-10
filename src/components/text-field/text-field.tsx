import React from 'react';
import * as Styles from './text-field.style';
import { TextFieldProps } from 'Utils/types';

const TextField = ({
  placeholder,
  type,
  onChange,
  isDisabled = false,
  inputVal = null,
  maxLength = 15,
  onKeyDown,
}: TextFieldProps) => {
  const isPassword = type === 'password';

  if (onChange) {
    return (
      <Styles.Input
        placeholder={placeholder}
        autoCapitalize="none"
        type={isPassword ? type : 'none'}
        onChange={(input: Record<string, any>) => onChange(input.target.value)}
        maxLength={maxLength}
        defaultValue={inputVal}
        onKeyDown={onKeyDown}
      />
    );
  }

  if (isDisabled) {
    return (
      <Styles.Input
        autoCapitalize="none"
        disabled={isDisabled}
        value={inputVal}
        maxLength={maxLength}
      />
    );
  }

  return (
    <Styles.Input
      placeholder={placeholder}
      autoCapitalize="none"
      type={isPassword ? type : 'none'}
      defaultValue={inputVal}
      onKeyDown={onKeyDown}
    />
  );
};

export default TextField;
