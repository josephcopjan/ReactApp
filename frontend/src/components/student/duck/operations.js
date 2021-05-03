import { Creators } from './events';
import rp from 'request-promise';
import axios from "axios";

const API_CONFIG = {
	apiDomain: process.env.REACT_APP_API_DOMAIN,
	apiURL: process.env.REACT_APP_API_ENDPOINT,
	apiVersion: process.env.REACT_APP_API_VERSION,
};

const IS_USER_NOT_AUTHORIZED = new RegExp(`${API_CONFIG.apiDomain}/saml/login?`, 'i');

const isEmpty = value => value === undefined || value === null || value === '';
const { setStatus, saveStudentSuccess, fetchStudentSuccess } = Creators;

const castFromForm = dbValues => {
	const { ...body } = dbValues;
	/*
	body.address = {};
	body.address.country = dbValues.country;
	body.address.city = dbValues.city;
	body.address.street = dbValues.street;
	body.address.number = dbValues.number;
	body.address.zip = dbValues.zip;*/

	if(dbValues.country!==null && dbValues.address!==dbValues.country){
	    body.address.country = dbValues.country;
	}
	return body;
};

const castToForm = formValues => {
	const { ...body } = formValues;

	if(body.gender==='M'){
	    body.gender = 'Male';
	} else if(body.gender==='F'){
	    body.gender = 'Female';
	}
	body.birthDate = new Date(body.birthDate).toISOString().slice(0, 10);
	//body.address.country = 'Slovakia';
	//body.location = body.address.country;
	body.location = {};
	body.location = body.address.country.country;
	return body;
};

const miwRequest = rp.defaults({
	baseUrl: API_CONFIG.apiURL,
	json: true,
	// followAllRedirects: false,
	// timeout: 2000
	// resolveWithFullResponse: true,
	withCredentials: true,
	followRedirect: false,
	transform: (body, response, resolveWithFullResponse) => {
		const { _fetchResponse } = response;
		if (_fetchResponse) {
			const { redirected, url } = _fetchResponse;
			if (redirected && url && IS_USER_NOT_AUTHORIZED.test(url)) {
				window.location.href = url;
				return Promise.reject({ authError: true });
			}
		}
		return resolveWithFullResponse ? response : body;
	}

});

const fetch = id => async dispatch => {
	try {
		if (id) {
		    axios.all([
		        axios.get('http://localhost:9090/student/'+id),
		        axios.get('http://localhost:9090/countries'),
		        axios.get('http://localhost:9090/subjects')
		    ]).then(axios.spread((...responses) => {
                    dispatch(fetchStudentSuccess(castToForm(responses[0].data), responses[1].data, responses[2].data));
            })).catch(errors => {
              // react on errors.
            });
		/*
			await Promise.all([
				await miwRequest.get(`/businessgroups/${id}`),
				await miwRequest.get('/miwusers/items')
			]).then(payload => {
				dispatch(fetchBusinessGroupSuccess(payload[0], payload[1]));
				return null;
			});*/
		} else {
			axios.all([axios.get('http://localhost:9090/countries'),
			            axios.get('http://localhost:9090/subjects')
			]).then(axios.spread((...responses) => {
              dispatch(fetchStudentSuccess(null, castToForm(responses[0].data), responses[1].data))
              // use/access the results
            })).catch(errors => {
              // react on errors.
            })
		}
	} catch (error) {
		//dispatch(fetchFailureBusinessGroup());
		//handleFormErrors(dispatch, 'businessGroupForm', error);
	}
};

const update = student => async dispatch => {
    console.log(student);
/*
	await miwRequest.put(
		`/businessgroups/${student.id}`, { body: { ...student } }
	).then(response => {
		dispatch(saveStudentSuccess(response));
	}).catch(error => {
		//handleFormErrors(dispatch, 'businessGroupForm', error);
	});*/

	axios.post('http://localhost:9090/updateStudent', castFromForm(student),

          {
                     method: 'POST',
                           mode: 'no-cors',
                           headers: {
                             'Access-Control-Allow-Origin': 'http://localhost:8000',
                             'Content-Type': 'application/json',
                           }
          }
        ).then(response => {
            dispatch(saveStudentSuccess(castToForm(response.data)));
        });
};
//async dispatch =>
const create = student => async dispatch => {

    axios.post('http://localhost:9090/addStudent', castFromForm(student),

      {
                 method: 'POST',
                       mode: 'no-cors',
                       headers: {
                         'Access-Control-Allow-Origin': 'http://localhost:8000',
                         'Content-Type': 'application/json',
                       }
      }
    )
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
};

const save = student => async dispatch => {
	//await dispatch(change('bcust', false));
	await dispatch(isEmpty(student.id) ? create(student) : update(student));
};

export default { save, setStatus, saveStudentSuccess,fetchStudentSuccess, fetch };