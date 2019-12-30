import React from "react";
import './App.css';
import AdminLayout from "./ui/AdminLayout";
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './ui/Login';
import SelectService from './ui/SelectService';
// import { connect } from 'react-redux';

const checkAuth = {
  isAuthenticated: false,
  authenticate(auth, cb) {
    this.isAuthenticated = true;
    window.localStorage.setItem('auth', JSON.stringify(auth));
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
     // checkAuth.isAuthenticated === true
    (window.localStorage.getItem('auth') !== null)
      ? <Component {...props} auth={checkAuth} />
      : <Redirect to='/' />
  )} />
)

function App() {
  return (
      <Switch>
        <Route path="/" exact render={(props) => <Login {...props} auth={checkAuth} />} />
        <PrivateRoute path='/admin' component={AdminLayout} />
        <Route path="/admin" render={ (props) => <AdminLayout {...props} auth={checkAuth} />} />
        <Route path="/admin/service" exact component={SelectService} />

        <Route>
          <h3>404 - Page not found</h3>
        </Route>

      </Switch>
  );
}

export default App;
