import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './about'
import Home from './home'

import {choosen_language} from './actions';
import { useSelector, useDispatch } from 'react-redux';

function Content(){

    const curr_lang = useSelector(state => state.curr_lang);
    const dispatch = useDispatch();

    return(
        <main>            
            <button onClick={() => dispatch(choosen_language('ru'))}>RU</button>
            <button onClick={() => dispatch(choosen_language('en'))}>EN</button>
            <button onClick={() => dispatch(choosen_language('et'))}>ET</button>
            <Router>
                <Switch>
                    
                    
                    <Route path={"/" + curr_lang + "/about"} component={About} />
                    <Route path={"/" + curr_lang + "/home"} component={Home} />
                    
                    
                    
                    {/* <Route path="/en/"> 
                        <Route path="/en/home" component={Home} /> 
                    </Route>
                    <Route path="/et/" component={About} />
                    <Route path="/ru/" component={About} /> */}

                </Switch>                
            </Router>
        </main>
    )      
}
export default Content
