import React from 'react';
import {render} from 'react-dom';
import App from './components/App.js';
import Router from './components/Router.js'
import "./css/style.css";
// let's go!

render(<Router></Router>, document.querySelector('.renderDisplay'));
