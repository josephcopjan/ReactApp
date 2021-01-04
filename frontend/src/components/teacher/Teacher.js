import TeacherForm from './TeacherForm';
import { withRouter } from 'react-router';
import compose from 'compose-function';
import { formValueSelector, reduxForm, isSubmitting } from 'redux-form';
import { connect } from 'react-redux';

const Teacher = compose(
	withRouter,
	//connect(mapStateToProps, mapDispatchToProps),
	reduxForm({
		form: 'TeacherForm',
		destroyOnUnmount: true,
		enableReinitialize: true,
		keepDirtyOnReinitialize: false,
		validate: values => {
			// return errors object
			const errors = {};
			return errors;
		}
	})

)(TeacherForm);

export default Teacher;