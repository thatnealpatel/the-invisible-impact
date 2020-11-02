import React from 'react';
import ReactFullPage from '@fullpage/react-fullpage';
import { Switch, Route } from 'react-router-dom';
import { hotjar } from 'react-hotjar';

import Splash from "./components/spa/Splash";
import Qr from "./components/Qr";
import AboutUs from "./components/spa/AboutUs";
import WhatIsEJ from "./components/spa/WhatIsEJ";
import OurProject from "./components/spa/OurProject";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const SPA = () => (
  <ReactFullPage
    debug
    navigation = {true}
    navigationPosition = {'left'}
    navigationTooltips = {['', 'About Us', 'What Is EJ?', 'Our Project', 'FILL', 'FILL']}
    licenseKey = {'OPEN-SOURCE-GPLV3-LICENSE'}
    scrollingSpeed = {1000}
    // anchors={['splash', 'about', 'schedule', 'faq', 'covidfaq', 'sponsors']}

    render={comp => (
        <ReactFullPage.Wrapper>
          <Splash/>
          <AboutUs/>
          <WhatIsEJ/>
          <OurProject/>
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
  hotjar.initialize(2074195,6);

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;

/*

*/