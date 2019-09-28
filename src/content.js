import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './about'
import Home from './home'

function Content() {   
    return(
        <main>
            <Router>
                <Switch>
                    <Route path={"/:ln/about"} component={About} />
                    <Route path={"/:ln/home"} component={Home} />
                </Switch>                
            </Router>
        </main>
    )      
}
export default Content
