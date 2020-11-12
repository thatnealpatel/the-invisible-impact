import React from "react";
import Typist from "react-typist";
import { Chart } from "react-charts";
import responseSchema from "../../media/response_data.json";

const cursorProps = {blink: true};

function BarChart() {
  const responseData = React.useMemo(
    () => [
     {
       label: 'Series 1',
       data: [
         { primary: 1, secondary: 10 },
         { primary: 2, secondary: 10 },
         { primary: 3, secondary: 10 },
       ],
     },
     {
       label: 'Series 2',
       data: [
         { primary: 1, secondary: 10 },
         { primary: 2, secondary: 10 },
         { primary: 3, secondary: 10 },
       ],
     },
     {
       label: 'Series 3',
       data: [
         { primary: 1, secondary: 10 },
         { primary: 2, secondary: 10 },
         { primary: 3, secondary: 10 },
       ],
     },
    ],
    []
  );

  const chartAxes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'left' },
      { stacked: true, type: 'linear', position: 'bottom' },
    ],
    []
  );

  const chartSeries = React.useMemo(
    () => ({
      type: "bar"
    }),
    []
  );

  return (
    <section id="thedata" className="thedata section">
      <div id="thedata-content">
        <div className="thedata-header">
          <Typist cursor={cursorProps}>
            {"The Data "}
           </Typist>
        </div>
        <div className="thedata-container">
          <Chart data={responseData} axes={chartAxes} series={chartSeries} />
        </div>
       </div>
    </section>
  )

}


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

export default BarChart;