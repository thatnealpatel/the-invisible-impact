import React from "react";
import Typist from "react-typist";

const cursorProps = {blink: true};

const ejIs = "the fair treatment and meaningful involvement of all\
people regardless of race, color, national origin, or\
income, with respect to the development, \
implementation, and enforcement of environmental\
laws, regulations, and policies.";

const invisibleImpact = "With one of the largest population densities and wealth\
distributions in the city of Athens, UGA bears a\
particular burden of influence on the effect it has over\
the local community, sending about 10 million pounds\
of waste to the landfill every year.";

const background = "Athens suffers from its share of environmental issues\
surrounding plastic use, water and air pollution,\
littering, and a general sense of environmental\
disregard for both students and locals alike. In many\
ways, these issues occur at the hands of the university\
system, which seeks to develop and gentrify the\
community in pursuit of its own capitalist goals.";

const goal = "By encouraging our fellow students and faculty to\
acknowledge their contribution to the problem, we\
hope to change the mentality surrounding waste at\
UGA from a passive participation to an active\
engagement.";

const WhatIsEJ = () => {
  return (
    <section id="what-is-ej" className="what-is-ej section">
      <div id="what-is-ej-content">
        <div className="what-is-ej-header">
          <Typist cursor={cursorProps}>
            {"Environmental justice is "}
           </Typist>
        </div>
        <br/>
        <div className="what-is-ej-text">
        	<p>{ejIs}</p>
        	<p>{invisibleImpact}</p>
        </div>
       </div>
    </section>
  );
};

export default WhatIsEJ;