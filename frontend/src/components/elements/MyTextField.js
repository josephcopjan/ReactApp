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
  },
};

const MyTextField = ({ input, label, meta: { touched, error, warning  }, ...custom }) => (
<div>
  <TextField hintText={label}
    className={styles.root}
    floatingLabelText={label}
    errorText={touched && error}
    variant="outlined"
    margin= 'dense'
    label={label}
    fullWidth
    {...input}
    {...custom}
  />
    {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
</div>
)

export default withStyles(styles)(MyTextField);