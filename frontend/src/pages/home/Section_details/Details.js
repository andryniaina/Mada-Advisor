import React, { Component, Fragment } from 'react';
import Bird from './../../../img/bird.jpg' ;
import './Details.css';
import imgBaobab from './../../../img/2.jpg';

class Details extends Component {

  render() {
    return (  
      <div class="container">
  <div class="row content-margin">
    <div class="col-xl-6 col-lg-6 col-md-6">
      <img src={imgBaobab} alt="responsive webite" class="img-fluid"/>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6">
      <h2>The Baobab, The Emblematic Malagasy Tree</h2>
      <p>A true emblem of Malagasy flora, the baobab is a majestic and sacred tree which has eight species. Six of them only grow in Madagascar. The alley of baobabs brings together the most specimens in the world, so you can see their impressive size and admire certain trunks intertwining naturally (baobab in love).</p>
    </div>
  </div>
</div>       
     

    );
  }
}

export default Details;
