import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import { AuthProvider } from './Auth'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import UsersList from './pages/UsersList/UsersList'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import CardDetailsContainer from './pages/CardDetailsContainer/CardDetailsContainer'
import CardEdit from './pages/CardEdit/CardEdit'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <PrivateRoute exact path="/users_list" component={UsersList} ></PrivateRoute>
          <PrivateRoute exact path="/users_list/:cardId" component={CardDetailsContainer} ></PrivateRoute>
          <PrivateRoute exact path="/users_list/:cardId/edit" component={CardEdit}></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
