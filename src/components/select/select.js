import React from 'react';
import * as Styles from './select.style.js';

const Select = ({ onChange, defaultVal, options }) => {
  return (
    <Styles.Select onChange={(input) => onChange(input.target.value)}>
      <option value="">{defaultVal}</option>
      {options.map((item) => {
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
