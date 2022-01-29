import React from 'react'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
  root: {
    fontSize: 10
  }
}

const MyTextField = ({ input, label, meta: { touched, error, warning }, ...custom }) => (
<div>
  <TextField
    classes={styles.root}
    label={label}
    error={(touched && error !== null)}
    variant="outlined"
    margin= 'dense'
    fullWidth
    {...input}
    {...custom}
  />
    {touched && (((error !== null) && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
</div>
)

MyTextField.propTypes = {
  input: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.any
}

export default withStyles(styles)(MyTextField)
