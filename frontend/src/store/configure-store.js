import 'babel-polyfill';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import reduxCatch from 'redux-catch';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history'; // eslint-disable-line
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { getUserConfirmation } from 'utils/routing';
// import { createLogger } from 'redux-logger';
import createRootReducer from '../reducers/root';
import rootSaga from '../sagas/root';
import Logger from '../utils/errorProcessing/logger';

const errorHandler = (error, getState) => Logger.error(error, getState());
const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory({	getUserConfirmation });

export default () => {
	const initialState = {};
	// const logger = createLogger({ collapsed: true });
	const catcher = reduxCatch(errorHandler);

	const store = createStore(
		createRootReducer(history),
		initialState,
		(composeWithDevTools || compose)(
			applyMiddleware(routerMiddleware(history), catcher, thunkMiddleware, sagaMiddleware)
		)
	);
	sagaMiddleware.run(rootSaga);

	return store;
};
