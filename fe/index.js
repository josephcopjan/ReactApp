import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import BooksApp from './reducers/BooksApp';

import Books from './components/containers/Books';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Home from './components/presentationals/Home';
import { BrowserRouter } from "react-router-dom";
import './styles/main.css';

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div>
        <Books store={store} />
      </div>
    )
  }
}

export default App;

//intialize store
let store = createStore(BooksApp)
console.log(store.getState());

ReactDOM.render(
  <Provider store = { store }>
  <BrowserRouter>
    <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
