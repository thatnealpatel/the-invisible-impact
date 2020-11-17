import React from "react";
import Typist from "react-typist";
import { Bar, Radar } from "react-chartjs-2";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useMediaQuery } from 'react-responsive'

// import responseSchema from "../../media/response_data.json";

const cursorProps = {blink: true};

const barData = {
  labels: ['Day One', 'Day Two', 'Day Three', 'Overview'],
  datasets: [
    {
      label: 'Responsibility?',
      data: [8, 1, 9, 18],
      backgroundColor: '#ff0000',
    },
    {
      label: 'Involvement?',
      data: [10, 1, 10, 21],
      backgroundColor: '#ff0f',
    },
    {
      label: 'Frustrations?',
      data: [5, 4, 10, 19],
      backgroundColor: '#f0f',
    },
    {
      label: 'Top Concern?',
      data: [8, 3, 10, 21],
      backgroundColor: '#00ff00',
    },
  ],
}

const barOptions = {
  responsive: true,
  // maintainAspectRatio: false,
  showLines: false,
  legend: {
    labels: {
      fontColor: "#fefefe",
      fontSize: 18
    }
  },
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          fontColor: "#fefefe",
          fontSize: 18,
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
        ticks: {
          fontColor: "#fefefe",
          fontSize: 18,
        }
      },
    ],
  },
}

const radarData = {
  labels: ['equal', 'gov/corp', 'career/gov', 'individual', 'other', 'accountability',
            'mindfulness', 'community', 'viability', 'climate', 'waste'],
  datasets: [
    {
      label: 'Responsibility?',
      data: [9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
      borderColor: 'rgba(255, 0, 0, 1)',
      borderWidth: 1,
    },
    {
      label: 'Involvement?',
      data: [0, 0, 8, 12, 1, 0, 0, 0, 0, 0, 0],
      backgroundColor: 'rgba(255, 255, 0, 0.2)',
      borderColor: 'rgba(255, 255, 0, 1)',
      borderWidth: 1,
    },
    {
      label: 'Frustrations?',
      data: [0, 0, 0, 0, 1, 11, 2, 1, 4, 0, 0],
      backgroundColor: 'rgba(255, 0, 255, 0.2)',
      borderColor: 'rgba(255, 0, 255, 1)',
      borderWidth: 1,
    },
    {
      label: 'Top Concern?',
      data: [0, 0, 0, 0, 0, 0, 0, 4, 0, 7, 10],
      backgroundColor: 'rgba(0, 255, 0, 0.2)',
      borderColor: 'rgba(0, 255, 0, 1)',
      borderWidth: 1,
    },
  ],
}

const radarOptions = {
  responsive: true,
  // maintainAspectRatio: false,
  legend: {
    labels: {
      fontColor: "#fefefe",
      fontSize: 18
    }
  },
  scale: {
    gridLines: {
      color: "#fefefe",
    },
    pointLabels: {
      fontColor: "#fefefe",
      fontSize: 18
    },
    ticks: { 
      beginAtZero: true,
      fontColor: "#fefefe",
      backdropColor: "rgba(255, 255, 255, 0)",
      fontSize: 14,
    },
  },
}

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1200 })
  return isDesktop ? children : null
}

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 42, maxWidth: 1199 })
  return isTablet ? children : null
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
          <Tablet>
            <div className="bar-chart">
              <Bar data={barData} options={barOptions} />
            </div>
            <div className="radar-chart">
              <Radar data={radarData} options={radarOptions} />
            </div>
          </Tablet>
          <Desktop>
            <Tabs>
              <TabList>
                <Tab>Bar Chart</Tab>
                <Tab>Radar Chart</Tab>
              </TabList>
              <TabPanel>
                <div className="bar-chart">
                  <Bar data={barData} options={barOptions} />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="radar-chart">
                  <Radar data={radarData} options={radarOptions} />
                </div>
              </TabPanel>
            </Tabs>
          </Desktop>
        </div>

       </div>

    </section>
  );
};

export default TheData;