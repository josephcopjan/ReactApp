import React from 'react';
import TextInput from './TextInput';
import OutputFieldRF from '../OutputFieldRF';
import Spinner from '../../Spinner';

const TextInputRF = ({ input, meta: { error, asyncValidating, touched }, showMode = false, ...otherProps }) => (
	!showMode ? (
		<TextInput
			{...input}
			{...otherProps}
			error={(touched && error) ? error : ''}
			icon={asyncValidating ? <Spinner type="inline" style={{ marginLeft: '10px' }} /> : otherProps.icon}
			disabled={asyncValidating || otherProps.disabled}
		/>
	) : <OutputFieldRF input={input} label={otherProps.label} />);

export default TextInputRF;
