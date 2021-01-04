import React from 'react';
import classNames from 'classnames';

import { getLabelClasses, getFieldNoteClasses, RequiredEl } from '../utils';

const TextInput = ({
	input,
	label,
	icon,
	disabled,
	className,
	required,
	error,
	fieldNote,
	fullWidth,
	isTextArea,
	labelClassName,
	noteClassName,
	contentClassName,
	standAlone,
	formType,
	...otherProps,
}) => {
	const Element = isTextArea ? 'textarea' : 'input';
	const labelClasses = getLabelClasses(labelClassName, formType);
	const fieldNoteClasses = getFieldNoteClasses(error, noteClassName);
	const elClasses = classNames(
		className,
		{ 'ibm-field-error': !!error },
		{ 'ibm-fullwidth': !!fullWidth },
		{ 'ibm-styled-input': standAlone && !formType },
	);

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
	);
};

export default TextInput;

TextInput.defaultProps = {
	value: '',
	type: 'text',
	size: 40,
	standAlone: false,
	contentClassName: 'miw-field-span'
};
