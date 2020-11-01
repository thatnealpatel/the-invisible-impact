import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Splash from "./components/spa/Splash";
// import Prettify from "./components/Prettify/Prettify";

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Splash}></Route>
      <Route exact path='/qr' component={Splash}></Route>
    </Switch>
  </BrowserRouter>
);

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
