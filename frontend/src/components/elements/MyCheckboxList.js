import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from "@material-ui/core/Checkbox";

const renderOptions = (options) => {
 return options.map((dt, i) => {

   return (
    <FormControlLabel
        value={dt.code}
        key={i}
        name={dt.name}
        control={<Checkbox />}
        label={dt.name}/>
   );
 });
}

const MyCheckboxList = ({ input, options, ...rest }) => (
  <FormControl>

    {renderOptions(options)}


  </FormControl>
)

export default MyCheckboxList;