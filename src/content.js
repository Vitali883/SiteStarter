import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './about'
import Home from './home'

function Content(){
    return(
        <main>
            <Router>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>                
            </Router>
        </main>
    )      
}
export default Content
