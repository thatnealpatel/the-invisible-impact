import React from "react";
import Typist from "react-typist";

const cursorProps = {blink: true};

const ejIs = "is the fair treatment and meaningful involvement of all\
people regardless of race, color, national origin, or \
income, with respect to the development, \
implementation, and enforcement of environmental \
laws, regulations, and policies.";

const invisibleImpact = "With one of the largest population densities and wealth \
distributions in the city of Athens, UGA bears a \
particular burden of influence on the effect it has over \
the local community, sending about 10 million pounds \
of waste to the landfill every year.";

const WhatIsEJ = () => {
  return (
    <section id="what-is-ej" className="what-is-ej section">
      <div id="what-is-ej-content">
        <div className="what-is-ej-header">
          <Typist cursor={cursorProps}>
            {"Environmental Justice "}
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