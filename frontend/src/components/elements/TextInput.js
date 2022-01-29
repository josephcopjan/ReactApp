import React from 'react'
import classNames from 'classnames'
import { getLabelClasses, getFieldNoteClasses, RequiredEl } from '../utils'
import PropTypes from 'prop-types'

const TextInput = ({
  input, label, icon, disabled, className, required, error, fieldNote, fullWidth, isTextArea, labelClassName, noteClassName, contentClassName, standAlone, formType, ...otherProps
}) => {
  const Element = isTextArea ? 'textarea' : 'input'
  const labelClasses = getLabelClasses(labelClassName, formType)
  const fieldNoteClasses = getFieldNoteClasses(error, noteClassName)
  const elClasses = classNames(
    className,
    { 'ibm-field-error': !!error },
    { 'ibm-fullwidth': !!fullWidth },
    { 'ibm-styled-input': standAlone && !formType }
  )
  return (
 <p>
 {label && (
 <label htmlFor={otherProps && otherProps.id} className={labelClasses}>
 {label}: {required && <RequiredEl />}
 </label>
 )}
 <span className={contentClassName}>
 <Element disabled={disabled} className={elClasses} {...otherProps} />
 {icon}
 </span>
 <span className={fieldNoteClasses}>{error || fieldNote}</span>
 </p>
  )
}

TextInput.propTypes = {
  input: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.any,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  fieldNote: PropTypes.string,
  fullWidth: PropTypes.bool,
  options: PropTypes.any,
  isTextArea: PropTypes.bool,
  labelClassName: PropTypes.string,
  noteClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  standAlone: PropTypes.any,
  formType: PropTypes.any
}

TextInput.defaultProps = {
  value: '',
  type: 'text',
  size: 40,
  standAlone: false,
  contentClassName: 'miw-field-span'
}

export default TextInput
