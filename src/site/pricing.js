import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';

import Menu from "../site/menu";
import Footer from "../site/footer";



class Pricing extends React.Component {
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
                                            <h4>Our Product Features/Pricing Plan</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <ul class="nav nav-pills mb-6 pricing-tab justify-content-center" id="pills-tab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                                                    aria-controls="pills-home" aria-selected="true">Buy</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                                                    aria-controls="pills-profile" aria-selected="false">Sell</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="tab-content" id="pills-tabContent">
                                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                <div class="row">
                                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                                        <div class="pricing-item">
                                                            <h3>Beginner</h3>
                                                            <div class="pricing-body">
                                                                <div class="price">
                                                                    <span></span>
                                                                    <span class="sup">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque
                                                                    </span>
                                                                </div>
                                                                <div class="progress" data-percent="45%">
                                                                </div>
                                                                <a class="btn btn-main" href="#">Join Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                                        <div class="pricing-item">
                                                            <h3>Silver</h3>
                                                            <div class="pricing-body">
                                                                <div class="price">
                                                                    <span class="sup">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque
                                                                    </span>
                                                                </div>
                                                                <div class="progress" data-percent="60%">
                                                                    <div class="progress-bar"></div>
                                                                </div>
                                                                <a class="btn btn-main" href="#">Join Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                                        <div class="pricing-item">
                                                            <h3>Gold</h3>
                                                            <div class="pricing-body">
                                                                <div class="price">
                                                                    <span class="sup">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque
                                                                    </span>
                                                                </div>
                                                                <div class="progress" data-percent="75%">
                                                                    <div class="progress-bar"></div>
                                                                </div>
                                                                <a class="btn btn-main" href="#">Join Now</a>
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
export default Pricing;