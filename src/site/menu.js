import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';

// import Logo from './assets/images/logo.jpg'



class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (

            <div>
                <section class="header  navigation">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <nav class="navbar navbar-expand-lg">
                                    <a class="navbar-brand" href={"/"}>
                                        <img src="" alt="Mitrosoft"/>
                                    </a>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="tf-ion-android-menu"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav ml-auto">
                                            <li class="nav-item active">
                                                <a class="nav-link" href={"/pricing"}>Pricing <span class="sr-only">(current)</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href={"/count"}>Personal Counter</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href={"/login"}>Sign In</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" href={"/sign-up"}>Sign Up</a>
                                            </li>
                                        </ul>
                                    </div>
                                    </nav>
                                    </div>
                                </div>
                                </div>
                        </section>

                     </div>
                

        );
    }
}
export default Menu;