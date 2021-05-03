import { Types } from './events';

const INITIAL_STATE = {
	status: 'new',
	editable: false,
	countries: [],
	allSubjects: [],
	student: {
		allDomains: true,
		allDeviceCategories: true,
		servicePlanning: false,
		bcosflag: true
	}
};

const studentReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {

	case Types.SET_STATUS: {
		return { ...state, status: action.status };
	}

    case Types.SAVE_STUDENT_SUCCESS: {
        const { student } = action;
        return { ...state, student, editable: true };
    }

    case Types.FETCH_STUDENT_SUCCESS: {
        const { student, countries, allSubjects } = action;
        return { ...state, student, editable: true, countries, allSubjects };
    }

	default:
		return state;
	}
};

export default studentReducer;
