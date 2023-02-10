import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Slides() {
    let imgTable=[
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"

,"https://crococoder.tn/wp-content/uploads/2022/11/JS.png"

,"https://static.javatpoint.com/images/javascript/javascript_logo.png"
    ]
 
    return (
      <Carousel>
           {imgTable.map (el=>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={el}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
           )};
        </Carousel>
        );
  }
  export default Slides;
