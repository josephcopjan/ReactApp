import { withStyles} from '@material-ui/core/styles';
import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const styles = theme => ({
  buttonFloat: {
    float: 'right'
  },
});

function MyButtonComponent(props) {
  const { classes, label, color, method } = props;

  return (

      <Button
        variant="contained"
        color={color}
        className={classes.buttonFloat}
        onClick={method}
      >{label}
      </Button>

  );
}

export default withStyles(styles)(MyButtonComponent);