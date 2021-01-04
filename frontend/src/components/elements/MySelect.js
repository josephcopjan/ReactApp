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

/*
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00F"
    }
  },
  typography: {
    body1: {
      fontFamily: "Comic Sans"
    }
  },
  custom: {
    myOwnComponent: {
      margin: "100px 100px",
      backgroundColor: "lightgreen",
      fontSize: "18px",
      height: 140,
    }
  }
});
*/




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

const classes = makeStyles((theme) => ({
                formControl: {
                    margin: theme.spacing(2),
                    minWidth: 120
                  },
                  selectEmpty: {
                    marginTop: theme.spacing(1)
                  },
                }));

const MySelect = ({ input, options, label, meta: { touched, error }, ...custom }) => (

        <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select hintText={label}
        label={label}
        style={{ fullWidth: true }}
        floatingLabelText={label}
        errorText={touched && error}
        variant="outlined"
        margin= 'dense'
        fullWidth

        {...input}
        {...custom}
      >
        {renderOptions(options)}
        </Select>
        </FormControl>



)

export default withStyles(styles)(MySelect);