import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//BrowserRouter is what interacts with
//history library and decides what to do
//based on a change inside the URL
//Route is the core of react router, is a react component
//that we can render inside any other react component
//that we put together inside our app
//provides configuration to show specific components
//depending on URL
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component{
    render() {return <div>Hello!</div>}
}

class Goodbye extends React.Component{
    render() {return <div>Goodbye!</div>}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      Header
        <Route path="/hello" component={Hello}/>
        <Route path="/goodbye" component={Goodbye}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
