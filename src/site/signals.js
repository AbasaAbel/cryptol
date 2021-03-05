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
                  

                <div>
                    <Footer/>
                </div>
            </div>
                

        );
    }
}
export default Count;