import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button'
import { makeStyles, withStyles, createStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '10px 30px 0px 30px;',
  },
  text: {
    fontSize: 15,
  }
});

const theme = createMuiTheme({
  overrides: {

    MuiDialogTitle: {

      root: {
            fontSize: 15,
            fontWeight: 'bold',
      },
    },
  },
});

function MyDialog(props) {
    const { onAccept, onDecline, onClose, open, input, label, ...custom } = props;
    const classes = useStyles();

    return (
        <Dialog
          open={open}
          keepMounted
          onClose={onClose}
          className={classes.root}
        >
          <ThemeProvider theme={theme}><DialogTitle disableTypography>Use Google location service?</DialogTitle></ThemeProvider>
          <DialogContent>
            <DialogContentText className={classes.text} id="alert-dialog-slide-description">
              Are you sure you want to confirm form ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onDecline} color="primary">
              Disagree
            </Button>
            <Button onClick={onAccept} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
    );
}

export default MyDialog;