import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button'

const MyDialog = ({ onAccept, onDecline, onClose, open, input, label, ...custom }) => (

  <Dialog
      open={open}
      keepMounted
      onClose={onClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
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
)

export default MyDialog;