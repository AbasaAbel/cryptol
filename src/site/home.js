
import React from 'react';
import { Button, 
} from 'react-bootstrap';
import { Link } from "react-router-dom";

import "../assets/css/style.css";
import "../assets/css/colors/blue.css";
import "../assets/css/colors/green.css";
import '../assets/css/colors/light-green.css';
import '../assets/css/colors/red.css';
import "../assets/css/colors/yellow.css";
import '../assets/plugins/bootstrap/dist/css/bootstrap-grid.css';
import '../assets/plugins/bootstrap/dist/css/bootstrap-grid.css.map';
import Image1 from "../assets/images/client-logo/clients-1.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../assets/images/slider/slider-bg-2.jpg"


class Home extends React.Component {
    constructor(props, context) {
		super(props, context);
        this.state = {
		};
	  }

    render(){
      var img = {
        width: '50%',
        height: '50%',

      }

        return(
            <div>
              <section class="hero-area">
                        <div class="container">
                            <div class="row">

                                <div class="col-lg-8">
                                    <div class="block">
                                        <h2>Our Arbitrage/Signal</h2>
                                        <p>The ability to create something which is not duplicable in the digital world has enormous.</p>
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <a data-scroll href="#services" class="btn btn-main">Explore Us</a>		
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-4 align-self-center mb-4 mb-lg-0">
                                    <div class="video-player">
                                        <img class="img-fluid rounded" src={Image} alt=""/>
                                        <a class="play-icon">
                                            <i class="tf-ion-ios-play" data-video="https://www.youtube.com/embed/g3-VxLQO7do?autoplay=1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>	
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
                        
                        <div >
                            <section>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                                <div class="title text-center">
                                                    <h4>Resouce center!/Atest</h4>
                                                </div>
                                            </div>
                                        </div>
                                    <div class="item">
                                    <div class="block">
                                        <div class="client-details">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dicta eius, nesciunt laboriosam cumque odio veritatis hic quibusdam, impedit corporis libero tenetur blanditiis rem maiores mollitia, vero officiis nulla molestias.</p>
                                        </div>
                                        <div class="media client-meta">
                                        <img class="mr-3 client-thumb" src={Image1} alt="Generic placeholder image"/>
                                        <div class="media-body">
                                            <h4 class="mt-0">Matt Cutts</h4>
                                            <p>CEO, Themefisher</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="block">
                                        <div class="client-details">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dicta eius, nesciunt laboriosam cumque odio veritatis hic quibusdam, impedit corporis libero tenetur blanditiis rem maiores mollitia, vero officiis nulla molestias.</p>
                                        </div>
                                        <div class="media client-meta">
                                        <img class="mr-3 client-thumb" src={Image1} alt="Generic placeholder image"/>
                                        <div class="media-body">
                                            <h4 class="mt-0">Matt Cutts</h4>
                                            <p>CEO, Themefisher</p>
                                        </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="block">
                                        <div class="client-details">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dicta eius, nesciunt laboriosam cumque odio veritatis hic quibusdam, impedit corporis libero tenetur blanditiis rem maiores mollitia, vero officiis nulla molestias.</p>
                                        </div>
                                        <div class="media client-meta">
                                        <img class="mr-3 client-thumb" src={Image1} alt="Generic placeholder image"/>
                                        <div class="media-body">
                                            <h4 class="mt-0">Matt Cutts</h4>
                                            <p>CEO, Themefisher</p>
                                        </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="block">
                                        <div class="client-details">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dicta eius, nesciunt laboriosam cumque odio veritatis hic quibusdam, impedit corporis libero tenetur blanditiis rem maiores mollitia, vero officiis nulla molestias.</p>
                                        </div>
                                        <div class="media client-meta">
                                        <img class="mr-3 client-thumb" src={Image1} alt="Generic placeholder image"/>
                                        <div class="media-body">
                                            <h4 class="mt-0">Matt Cutts</h4>
                                            <p>CEO, Themefisher</p>
                                        </div>
                                        </div>
                                        <br />
                                        <div>
                                        <a class="btn btn-main" href="#" >Read more</a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </section>

                        </div>
	        </div>


      );
    }
}
export default Home;
