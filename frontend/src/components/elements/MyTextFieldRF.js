import React from 'react'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
  root: {
    fontSize: 10
  }
}

const MyTextFieldRF = ({ value, input, error, label, ...otherProps}) => {
    const aaa = 'ssss';
    return (<div>
      <TextField
        classes={styles.root}
        label={label}
        variant='outlined'
        margin= 'dense'
        fullWidth
        {...input}
        {...otherProps}
      />
        {((<span className="text-danger">{error}</span>))}
    </div>)
}

MyTextFieldRF.propTypes = {
  input: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.any,
  value: PropTypes.string,
  helperTextContent: PropTypes.string
}

MyTextFieldRF.defaultProps = {
    autoComplete: 'test'
}

export default withStyles(styles)(MyTextFieldRF)
