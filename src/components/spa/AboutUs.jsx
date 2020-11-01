import React from "react";
import Typist from "react-typist";

const cursorProps = {blink: true};

const aboutUsText = "We are an student run, art-devoted team of students \
dedicated to exploring the impact of artistic instillation in educating \
communities about the impact of environmental justice.";

const mission = "Our goal is to democratize and disseminate \
questions into the world of academia to better \
examine university impact on local communities, \
bringing environmental justice and it's \
intersectionality of influence to the forefront of \
student's minds";

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us section">
      <div id="about-us-content">
        <div className="about-us-header">
          <Typist cursor={cursorProps}>
            {"Who Are We? "}
           </Typist>
        </div>
        <br/>
        <div className="about-us-text">
        	<p>{aboutUsText}</p>
        	<br/>
        	<p>{mission}</p>
        </div>
       </div>
    </section>
  );
};

export default AboutUs;