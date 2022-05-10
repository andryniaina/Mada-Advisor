import React from 'react';
import './Footer.css';

import { NavLink } from 'react-router-dom';

const Footer = () => (
    <div class="footer-dark">
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Forum</a></li>
                    </ul>
                </div>

                <div class="col-md-6 item text">
                    <h3>Plus</h3>
                    <ul>
                        <li><a href="#">Accounts</a></li>
                        <li><a href="#">Setting</a></li>
                    </ul>
                </div>

                <div class="col-sm-6 col-md-3 item">
                    <h3>About</h3>
                    <p>
                        This site is designed to accompany you throughout the circuit. Plan for the movement of people with disabilities. Explain the history of the place and objects.
                    </p>
                </div>

                <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
            </div>
            <p class="copyright">Mada Advisor © 2022</p>
        </div>
    </footer>
</div>
)

export default Footer;
