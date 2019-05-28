import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker.js';
import App from './App.js';
import NotFound from './NotFound.js';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component = {StorePicker}> </Route>
            <Route path="/store/:storeId" component={App}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
)

export default Router;