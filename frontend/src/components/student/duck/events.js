import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    setStatus: ['status'],
    saveStudentSuccess: ['student'],
    fetchStudentSuccess: ['student', 'countries'],
    /*
	fetchNewBusinessGroupSuccess: ['businessGroup', 'users'],
	fetchBusinessGroupSuccess: ['businessGroup', 'users'],
	fetchFailureBusinessGroup: [],
	saveBusinessGroupSuccess: ['businessGroup'],
	clearBusinessGroupState: [],
	loadingBusinessGroup: ['loading'],
	setShowModeBusinessGroup: ['showMode'],
	setFlag: ['bcosflag'],
	setLocation: ['docOwnedByLoc'],
	setCountry: ['countryId'],*/
});

export { Creators, Types };
