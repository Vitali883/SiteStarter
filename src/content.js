import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './about'
import Home from './home'

import { useSelector } from 'react-redux';


function Content() {   
    const curr_lang = useSelector(state => state.userLanguage);
    return(
        <main>
            <Router>
                <Switch>               
                    <Route path={"/" + curr_lang + "/about"} component={About} />
                    <Route path={"/" + curr_lang + "/home"} component={Home} />
                </Switch>                
            </Router>
        </main>
    )      
}
export default Content
