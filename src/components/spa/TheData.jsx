import React from "react";
import Typist from "react-typist";
import { Chart } from "react-charts";
import responseSchema from "../../media/response_data.json";

const cursorProps = {blink: true};

const TheData = () => {



  return (
    <section id="thedata" className="thedata section">
      <div id="thedata-content">
        <div className="thedata-header">
          <Typist cursor={cursorProps}>
            {"The Data "}
           </Typist>
        </div>
        <div className="thedata-container">

        </div>
       </div>
    </section>
  );
};

export default TheData;