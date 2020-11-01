import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import Splash from "./components/spa/Splash";
import Qr from "./components/Qr";

const Main = () => (
  <Switch>
    <Route exact path='/' component={Splash}></Route>
    <Route exact path='/qr' component={Qr}></Route>
  </Switch>
);

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
