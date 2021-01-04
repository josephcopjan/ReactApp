import React from 'react';
import { TextField } from '@material-ui/core'


const MyDatePicker = ({ input, label, meta: { touched, error }, ...custom }) => (

  <TextField
      id="date"
      label={label}
      type="date"
      variant="outlined"
      margin= 'dense'
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      {...input}
    />
)

export default MyDatePicker;