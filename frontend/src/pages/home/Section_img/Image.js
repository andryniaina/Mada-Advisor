import React, { Component, Fragment } from 'react';
import '.Image.css';

class Image extends Component{
    render() {
        return (
          <section class="section-4">
      
          <div class="section-4-bottom">
              <div class="block-25">
                  <img class="img-block-section-4" src="../../../assets/cat1.jpg"/>
              </div>
              <div class="block-25">
                  <img class="img-block-section-4" src="../../../assets/cat2.jpg"/>
              </div>
              <div class="block-25">
                  <img class="img-block-section-4" src="../../../assets/cat3.jpg"/>
              </div>
              <div class="block-25">
                  <img class="img-block-section-4" src="../../../assets/cat4.jpg"/>
              </div>
          </div>
      
      </section>
        );
    }
}

export default Image;