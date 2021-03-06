import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './pages/Logon/index';
import Register from './pages/register';
import Profile from './pages/profile';
import newIncident from './pages/newIncident';


export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Logon} />
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} />
            <Route path='/incidents/new' component={newIncident} />
        </Switch>
        </BrowserRouter>
    )
}