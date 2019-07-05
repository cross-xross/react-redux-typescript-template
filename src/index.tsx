import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './views/App';
import store from './store/store';
import { Provider } from 'react-redux';
import AppContainer from './containers/appContainer';

ReactDOM.render(
<Provider store={store} >
  <AppContainer/>
</Provider>
,document.getElementById('root'));
