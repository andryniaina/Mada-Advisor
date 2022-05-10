import React, { Component, Fragment } from 'react';
//import sary2 from './../../../img/sar1.jpg';
import sary2 from './../../../img/a4.jpg';
import sary3 from './../../../img/a2.jpg';
import sary1 from './../../../img/f1.jpg';
import sary4 from './../../../img/a3.jpg';
import sary5 from './../../../img/f1.jpg';
import './Cercle.css';
class Cercle extends Component{
    render(){
        return(
            <div className='izr container'>
                <img id="s1" src={sary1}/>
                <img id="s2" src={sary2}/>
                <img id="s3" src={sary3}/>
                
            </div>
            
        );

    }
}
export default Cercle;