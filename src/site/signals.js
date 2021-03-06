import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';

import Menu from "./menu";
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
                                            <h4>Resource center </h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="tab-content" id="pills-tabContent">
                                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                <div class="row">
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