import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';

import Menu from "./nav";
import Footer from "./footer";



class Count extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (

            <div>
                <div>
                    <Menu />
                </div>
                <div class="container">
                <section class="pricing-table section" id="pricing">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div class="title text-center">
                                            <h4>Arbitrage</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="tab-content" id="pills-tabContent">
                                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                <div class="row">
                                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                                        <div class="pricing-item">
                                                            <h3>Lorem ipsum</h3>
                                                            <div class="pricing-body">
                                                                <div class="price">
                                                                    <span></span>
                                                                    <span class="sup">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                                        <div class="pricing-item">
                                                            <h3>Lorem ipsum</h3>
                                                            <div class="pricing-body">
                                                                <div class="price">
                                                                    <span class="sup">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                                        <div class="pricing-item">
                                                            <h3>Lorem ipsum</h3>
                                                            <div class="pricing-body">
                                                                <div class="price">
                                                                    <span class="sup">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="tab-content" id="pills-tabContent">
                                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                <div class="row">
                                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                                        <div class="pricing-item">
                                                            <h3>Lorem ipsum</h3>
                                                            <div class="pricing-body">
                                                                <div class="price">
                                                                    <span></span>
                                                                    <span class="sup">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                                        <div class="pricing-item">
                                                            <h3>Lorem ipsum</h3>
                                                            <div class="pricing-body">
                                                                <div class="price">
                                                                    <span class="sup">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                                        <div class="pricing-item">
                                                            <h3>Lorem ipsum</h3>
                                                            <div class="pricing-body">
                                                                <div class="price">
                                                                    <span class="sup">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                          </section> 
                    </div> 

                <div>
                    <Footer/>
                </div>
            </div>
                

        );
    }
}
export default Count;