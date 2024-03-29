import React from 'react';
import ReactFullPage from '@fullpage/react-fullpage';
import { Switch, Route, Redirect } from 'react-router-dom';
import Splash from "./components/spa/Splash";
// import Qr from "./components/Qr"; // only needed during intervention.
import Gallery from "./components/spa/Gallery";
import TheData from "./components/spa/TheData";
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
    navigationTooltips = {['', 'Gallery', 'The Data', 'About Us', 'What Is EJ?', 'Our Project', 'FILL', 'FILL']}
    licenseKey = {'OPEN-SOURCE-GPLV3-LICENSE'}
    scrollingSpeed = {1000}
    // anchors={['splash', 'about', 'schedule', 'faq', 'covidfaq', 'sponsors']}

    render={comp => (
        <ReactFullPage.Wrapper>
          <Splash/>
          <Gallery />
          <TheData />
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
    <Route exact path='/qr'><Redirect to='/'/></Route>
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