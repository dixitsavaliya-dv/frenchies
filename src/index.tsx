import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css'

// core components
import Admin from './layouts/Admin';
import RTL from './layouts/RTL';

import 'assets/css/material-dashboard-react.css?v=1.6.0';
import Login from './views/Login/login';

const hist = createBrowserHistory();

ReactDOM.render(
// tslint:disable-next-line: jsx-wrap-multiline
  <Router history={hist}>
    <Switch>
    <Route exact path='/login' component={Login} />
      <Route path="/admin" component={Admin} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById('root')
);
