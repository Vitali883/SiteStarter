import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import About from '../views/About';
import Registration from '../views/Registration'


export default (
    <Switch>
        <Route path='/:ln/about' component={About} />
        <Route path='/:ln/registration' component={Registration} />
        <Route path='/:ln' component={Home} />
        <Route path='/' component={Home} />
    </Switch>
);