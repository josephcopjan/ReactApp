import { Types } from './events';

const INITIAL_STATE = {
	status: 'new',
	editable: false,
	countries: [],
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
        const { student, countries } = action;
        return { ...state, student, editable: true, countries };
    }

	default:
		return state;
	}
};

export default studentReducer;
