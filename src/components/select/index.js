import React from 'react';
import { $Select } from './select.style.js';

const Select = ({ onChange, defaultVal, options }) => {
  return (
    <$Select onChange={(input) => onChange(input.target.value)}>
      <option value="">{defaultVal}</option>
      {options.map((item) => {
        return (
          <option value={item} key={item}>
            {item}
          </option>
        );
      })}
    </$Select>
  );
};

export default Select;
