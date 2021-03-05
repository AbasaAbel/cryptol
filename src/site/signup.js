import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';

import Menu from "../site/menu";
import Footer from "../site/footer";



class Login extends React.Component {
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
                  <section class="signin-page account">
                        <div class="container">
                            <div class="row">
                            <div class="col-md-6 mx-auto">
                                <div class="block text-center">
                                <h2 class="text-center">Create Your Account</h2>
                                 <form class="text-left clearfix mt-30" action="index.html">
                                    <div class="form-group">
                                    <input type="text" class="form-control"  placeholder="First Name"/>
                                    </div>
                                    <div class="form-group">
                                    <input type="text" class="form-control"  placeholder="Last Name"/>
                                    </div>
                                    <div class="form-group">
                                    <input type="text" class="form-control"  placeholder="Username"/>
                                    </div>
                                    <div class="form-group">
                                    <input type="email" class="form-control"  placeholder="Email"/>
                                    </div>
                                    <div class="form-group">
                                    <input type="password" class="form-control"  placeholder="Password"/>
                                    </div>
                                    <button type="submit" class="btn btn-main text-center">Sign In</button>
                                </form>
                                <p class="mt-20">Already hava an account ?<a href="login.html"> Login</a></p>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                        </section>

                <div>
                    <Footer/>
                </div>
            </div>
                

        );
    }
}
export default Login;