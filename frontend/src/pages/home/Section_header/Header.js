import React, { Component, Fragment } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div id="splash" class="position-relative">
          <div class="wrapper container">
              <div class="home-content d-flex h-100 justify-content-center align-items-center">
                  <div class="splash-text text-center">
                      <h1>Welcome to Madagascar</h1>
                      <p class="mb-5 d-none d-md-block marginside">Madagascar is an amazing and fascinating island which is sometimes also referred to as the eight continent.  As a bubbling sanctuary, Madagascar is an ode to life filled with magical and rare site of beauty. Its high lands and mountains, primary forests, the depths of its lagoons, towns and villages offer a remarkable explosion of colors, shapes and sounds which are not available elsewhere and a feast to the eyes. Madagascar has made a lasting impression on its visitors' hearts that never fades. Madagascar is a call to travel. One of those rare destinations that has the art of awakening dreams of departure, desires to the unknown and needs to relate to others.
It is the most beautiful of all its treasures!
                      </p>
                      <div class="text-center">
                          <a href="#" class="btn btn-outline-secondary">Learn more about the exceptional sites and tourism</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Header;
