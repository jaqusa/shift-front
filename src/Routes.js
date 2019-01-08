import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home';
import AuthComponent from './components/auth/AuthComponent';
import Profile from './components/home/Profile';
import Envia from './components/home/Envia';
import Recarga from './components/home/Recarga';
import Retira from './components/home/Retira';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={AuthComponent} />
        <Route path="/login" component={AuthComponent} />
        <Route path="/profile" component={Profile} />
        <Route path="/envia" component={Envia} />
        <Route path="/recarga" component={Recarga} />
        <Route path="/retira" component={Retira} />
    </Switch>
)

export default Routes