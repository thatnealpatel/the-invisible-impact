import React from "react";
import Typist from "react-typist";

const cursorProps = {blink: true};

class Gallery extends React.Component {

  importAll(context) {
    return context.keys().map(context);
  }

  componentWillMount() {
    
  }

  render() {
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
  }
}

export default Gallery;