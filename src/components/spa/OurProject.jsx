import React from "react";
import Typist from "react-typist";

const cursorProps = {blink: true};

const background = "Athens suffers from its share of environmental issues\
surrounding plastic use, pollution, \
littering, and a general sense of environmental \
disregard. In many \
ways, these issues occur at the hands of the university \
system, which seeks to develop and gentrify the \
community in pursuit of its own capitalist goals.";

const goal = "By encouraging our fellow students and faculty to \
acknowledge their contribution to the problem, we \
hope to change the mentality surrounding waste at \
UGA from a passive participation to an active \
engagement.";

const OurProject = () => {
  return (
    <section id="our-project" className="our-project section">
      <div id="our-project-content">
        <div className="our-project-header">
          <Typist cursor={cursorProps}>
            {"Our Project "}
           </Typist>
        </div>
        <br/>
        <div className="our-project-text">
        	<p>{background}</p>
          <br/>
        	<p>{goal}</p>
        </div>
       </div>
    </section>
  );
};

export default OurProject;