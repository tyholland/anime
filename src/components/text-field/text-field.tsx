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
  const specialTypes = type === 'email' || type === 'password';

  if (onChange) {
    return (
      <Styles.Input
        placeholder={placeholder}
        autoCapitalize="none"
        type={type ? type : 'none'}
        onChange={(input: Record<string, any>) => onChange(input.target.value)}
        maxLength={specialTypes ? 300 : maxLength}
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
        maxLength={specialTypes ? 300 : maxLength}
      />
    );
  }

  return (
    <Styles.Input
      placeholder={placeholder}
      autoCapitalize="none"
      type={type ? type : 'none'}
      defaultValue={inputVal}
      onKeyDown={onKeyDown}
    />
  );
};

export default TextField;
