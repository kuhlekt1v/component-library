import React from 'react';

import '../../Styles/Constants.css';
import './Forms.css';

type Props = {
  id: string;
  label: string;
  value: string;
};

export const FormCheck = ({ id, label, value }: Props) => {
  return (
    <div style={{ marginLeft: '5px', marginTop: '-10px' }}>
      <input type="checkbox" id={id} name={id} value={value} className="checkbox" />
      <label htmlFor="rememberMe" style={{ color: `var(--body)`, marginLeft: '1rem' }}>
        {label}
      </label>
    </div>
  );
};
