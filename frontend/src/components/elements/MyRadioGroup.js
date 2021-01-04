import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

    const renderOptions = (options) => {
     return options.map((dt, i) => {

       return (
        <FormControlLabel
            value={dt.code}
            key={i}
            name={dt.name}
            control={<Radio />}
            label={dt.name}/>
       );
     });
    }

const MyRadioGroup = ({ input, options, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
    {renderOptions(options)}

    </RadioGroup>
  </FormControl>
)

export default MyRadioGroup;

