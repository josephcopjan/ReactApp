import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, withStyles, createStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'lightblue',
    width: '90%',
    height: '90%',
    position: 'absolute',
    zIndex: '9999',
    backgroundColor: fade('#FFFFFF', 0.5)
  }
});

const theme = createMuiTheme({
  overrides: {

    MuiCircularProgress: {

      root: {
        position: 'absolute',
        marginLeft: '50%',
        marginTop: '25%'
      },
    },
  },
});

export default function MyCircularProcess(props) {
    const { submitting, ...custom } = props;
    const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}><div className={classes.root} hidden={submitting}><CircularProgress disableShrink={false} /></div></ThemeProvider>
    </div>
  );
}