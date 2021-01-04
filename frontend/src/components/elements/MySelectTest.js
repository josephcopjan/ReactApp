import React from 'react';
import { TextField } from '@material-ui/core'
import {
  useTheme,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const styles = {
  root: {
    fontSize: 10
  }
};

    const renderOptions = (options) => {
     return options.map((dt, i) => {

       return (
           <MenuItem
             label="Select a country"
             value={dt.code}
            key={i} name={dt.name}>{dt.name}</MenuItem>

       );
     });
    };

const useStyles = makeStyles(theme => ({
  focused: {
    fontSize: 10
  }
}));

function MySelectTest(props) {
    const classes = useStyles();
    const { label, color, method, options } = props;
    const renderOptions = (options) => {
     return options.map((dt, i) => {

       return (
           <MenuItem
             label="Select a country"
             value={dt.code}
            key={i} name={dt.name}>{dt.name}</MenuItem>

       );
     });
    };
  return (
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
          className={classes.focused}
          id="demo-simple-select-outlined-label"
        >
          Country
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
        >
          {renderOptions(options)}
        </Select>
      </FormControl>
  );
}
export default withStyles(styles)(MySelectTest);