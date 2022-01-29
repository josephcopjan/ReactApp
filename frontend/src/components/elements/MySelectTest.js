import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  root: {
    height: 30,
    padding: '10px 30px 0px 30px;',
    fontSize: 10
  }
})

function MySelectTest (props) {
  const { options, input: { onChange, name, value } } = props
  const classes = useStyles()

  const renderOptions = (options) => {
    return options.map((dt, i) => {
      return (
          <option
            label={dt.name}
            value={dt.name}
            key={dt.id}
            name={dt.name}
            className={classes.root}
          >
            {dt.name}
          </option >
      )
    })
  }
  return (
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
          className={classes.focused}
          id="demo-simple-select-outlined-label"
        >
          Country
        </InputLabel>
        <Select
            name={name}
            value={value}
            onChange={e => { onChange(e.target.value) }}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
        >
          {renderOptions(options)}
        </Select>
      </FormControl>
  )
}

MySelectTest.propTypes = {
  input: PropTypes.any,
  options: PropTypes.any
}

export default MySelectTest
