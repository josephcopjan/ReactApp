import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import BooksApp from './reducers/BooksApp';
import studentReducer from './components/student/duck/reducer';
import teacherReducer from './components/student/duck/reducer';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import authReducer from "./reducers";

//top level of React component hierarchy
class ReactApp extends React.Component {
  render() {
    return (
      <div>
        <App store={store} />
      </div>
    )
  }
}

export default ReactApp;

// combining two reducers into a single reducer
const reducer = combineReducers({
    authReducer,
    form: formReducer,
    studentForm: studentReducer,
    teacherForm: teacherReducer,
})

// to see redux state in browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
console.log(store.getState());

ReactDOM.render(
<Provider store = { store }>
<BrowserRouter>
<ReactApp/>
</BrowserRouter></Provider>, document.getElementById("root"));
