import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css"
import {injectStoreToServer} from "./actions/server";
import {store} from "./store";


injectStoreToServer(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);