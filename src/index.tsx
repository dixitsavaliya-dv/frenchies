import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css'

// core components
import Admin from './layouts/Admin';

import 'assets/css/material-dashboard-react.css?v=1.6.0';
import Login from './views/Login/login';
import Main from './main';

const hist = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={props => (
    // console.log(Component)
    props.location.pathname !== '/admin/' &&  1<2 ? (
      // console.log("enter")
     1<2 ? (
        // console.log("msg")
        <Component {...props} />
      ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
        )
    ) : (  <Redirect to={{
      pathname: '/login',
      state: { from: props.location }
    }} />) 
  )} />
)

ReactDOM.render(
// tslint:disable-next-line: jsx-wrap-multiline
  <HashRouter>
    <Switch>
    <Route exact path='/' render={(props: any) => (<Login {...props} />)}/>
    <PrivateRoute path="/" component={Main} />
    {/* <Redirect from="/" to="/login" /> */}
      {/* <Route path="/admin" render={(props: any) => (<Admin {...props} />)}/> */}
      {/* <Redirect from="/" to="/admin/dashboard" /> */}
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
