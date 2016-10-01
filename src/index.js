import React from 'react';
import ReactDOM from 'react-dom';
import Routs from './js/utilities/Routs';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import './css/index.css';

import Login from './js/pages/Login';
import Layout from './js/components/Layout';
import NotFound from '../src/js/pages/NotFound';
import Home from '../src/js/pages/Home';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path={'/'} component={Layout}>
            <IndexRoute component={Home}/>
            <Route path={Routs.LOGIN} component={Login}/>
            <Route path="*" component={NotFound} />
        </Route>
    </Router>,
  document.getElementById('root')
);
