import React from "react";
import Typist from "react-typist";
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const cursorProps = {blink: true};
var images = [];

class Gallery extends React.Component {

  importAll(context) {
    return context.keys().map(context);
  }

  componentWillMount() {
    images = this.importAll(require.context('../../media/intervention-pics/useful', false, /\.(png|jpe?g|JPE?G|svg)$/));
  }


  render() {
    return (
      <section id="gallery" className="gallery section">
        <div id="gallery-content">
          <div className="gallery-header">
            <Typist cursor={cursorProps}>
              {"Gallery "}
             </Typist>
          </div>
          <div className="gallery-container">
            <CarouselProvider
                naturalSlideWidth={3}
                naturalSlideHeight={4}
                visibleSlides={1}
                infinite={true}
                totalSlides={15}
              >
            <Slider>
              {images.map(
                  (image, i) => 
                    <Slide index={i}>
                      <div className="carousel-img-container">
                        <img src={image} alt="img"/>
                      </div>
                    </Slide>
                )
              }
            </Slider>
            <div className="dot-div">
              <DotGroup className="carousel-dots" />
            </div>
        </CarouselProvider>
          </div>
         </div>
      </section>
    );
  }
}

export default Gallery;

/*

            <ButtonBack className="carousel-back">Back</ButtonBack>
            <ButtonNext className="carousel-next">Next</ButtonNext>





        <div className="gallery-text">          
          <p>test centered?</p>
        </div>
*/