import React from 'react';
import * as Styles from './select.style';
import { SelectProps } from 'Utils/types';

const Select = ({ onChange, defaultVal, options }: SelectProps) => {
  return (
    <Styles.Select onChange={(input) => onChange(input.target.value)}>
      <option value="">{defaultVal}</option>
      {options.map((item: string) => {
        return (
          <option value={item} key={item}>
            {item}
          </option>
        );
      })}
    </Styles.Select>
  );
};

export default Select;
