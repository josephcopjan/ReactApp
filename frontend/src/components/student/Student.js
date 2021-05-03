import StudentForm from './StudentForm';
import StudentList from './StudentList';
import { withRouter } from 'react-router';
import compose from 'compose-function';
import { formValueSelector, reduxForm, isSubmitting } from 'redux-form';
import { connect } from 'react-redux';
import oper from './duck/operations';
import safeMapStateToProps from '../../utils/map-state-to-props';

const mapStateToProps = safeMapStateToProps(state => {
    const { studentForm, precache, users } = state;
    console.log('state ' + state);
	const { status, student, countries, allSubjects } = studentForm;
    //const { status } = studentForm;

	return {
	    initialValues: student,
	    submitting: isSubmitting('studentForm')(state),
		status,
		countries,
		allSubjects,
		myField : ["aaa", "bbb"]
	};
});

const mapDispatchToProps = dispatch => {

	const setStatus = status => dispatch(oper.setStatus(status));
    const saved = obj => dispatch(oper.save(obj));
    const saveStudentSuccess = obj => dispatch(oper.saveStudentSuccess(obj));
    const fetch = id => dispatch(oper.fetch(id));

	return {
        onSubmit: saved,
		setStatus,
		fetch,
		saveStudentSuccess
	};
};

const Student = compose(

	connect(mapStateToProps, mapDispatchToProps),
	reduxForm({
		form: 'studentForm',
		destroyOnUnmount: true,
		enableReinitialize: true,
		keepDirtyOnReinitialize: false,
		validate: values => {
			// return errors object
			const errors = {};

            if (!values.firstName) {
              errors.firstName = 'Required'
            } else if (values.firstName.length < 2) {
              errors.firstName = 'Minimum be 2 characters or more'
            }
            if (!values.email) {
              errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = 'Invalid email address'
            }
            if (!values.lastName) {
                errors.lastName = 'Required'
            } else if (values.lastName.length < 2) {
                errors.lastName = 'Minimum be 2 characters or more'
            }
            if (!values.gender) {
              errors.gender = 'Required'
            }

			return errors;
		}
	})

)(StudentForm);

export default Student;