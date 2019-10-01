import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home';
import About from '../about';


export default (
    <Switch>
        <Route path={"/:ln/home"} component={Home} />
        <Route path={"/:ln/about"} component={About} />
    </Switch>
);