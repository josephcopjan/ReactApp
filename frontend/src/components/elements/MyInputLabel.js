import React from 'react';
import { InputLabel } from '@material-ui/core';

function MyInputLabel(props) {
    const { name, value, ...custom } = props;

    return (
        <InputLabel

          value
        >
        <h3>{value}</h3>
        </InputLabel>
  )
}

export default MyInputLabel;