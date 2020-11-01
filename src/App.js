import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Splash from "./components/spa/Splash";
import Qr from "./components/Qr";

import ReactFullPage from '@fullpage/react-fullpage';

const SPA = () => (
  <ReactFullPage
    debug
    navigation = {true}
    navigationPosition = {'left'}
    navigationTooltips = {['', 'About', 'Schedule', 'FAQ', 'COVID FAQ', 'Sponsors']}
    licenseKey = {'OPEN-SOURCE-GPLV3-LICENSE'}
    scrollingSpeed = {1000}
    // anchors={['splash', 'about', 'schedule', 'faq', 'covidfaq', 'sponsors']}

    render={comp => (
        <ReactFullPage.Wrapper>
          <Splash/>
        </ReactFullPage.Wrapper>
    )}
  />
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={SPA}></Route>
    <Route exact path='/qr' component={Qr}></Route>
  </Switch>
);

function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;

/*

*/