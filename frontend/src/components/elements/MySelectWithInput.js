import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const aquaticCreatures = [
  { label: 'Shark', value: 'Shark' },
  { label: 'Dolphin', value: 'Dolphin' },
  { label: 'Whale', value: 'Whale' },
  { label: 'Octopus', value: 'Octopus' },
  { label: 'Crab', value: 'Crab' },
  { label: 'Lobster', value: 'Lobster' }
]

const MySelectWithInput = ({ input, label, ...custom }) => (
<div>
  <Select
          options={aquaticCreatures}
        />
</div>
)

MySelectWithInput.propTypes = {
  input: PropTypes.string,
  label: PropTypes.string
}

export default MySelectWithInput
