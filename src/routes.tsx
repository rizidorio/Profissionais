import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Residencial from './pages/Residencial'


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={Residencial} path="/residencial" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;