import React from "react";
import Typist from "react-typist";

const cursorProps = {blink: true};

const Gallery = () => {
  return (
    <section id="gallery" className="gallery section">
      <div id="gallery-content">
        <div className="gallery-header">
          <Typist cursor={cursorProps}>
            {"Gallery "}
           </Typist>
        </div>
        <br/>
        <div className="gallery-text">
        	
        </div>
       </div>
    </section>
  );
};

export default Gallery;