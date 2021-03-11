import React from 'react';
import { Button,  Nav, Navbar, Form, FormControl,} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/scss/templates/_header.scss';
import "../assets/css/style.css";

// import Logo from './assets/images/logo.jpg'



class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (

            <div >
                    <Navbar CollapseOrSelect fixed ='top' bg="primary" variant="dark" colour="darkblue" expand ="sm">
                       <div>
                           <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                                <Navbar.Collapse id='responsive-navbar-nav'>
                                    <Navbar.Brand href={'/'}>Mitrosoft</Navbar.Brand>
                                        <div className="ml-auto">
                                            <Nav>
                                                <Nav.Link href={"/pricing"} >Pricing</Nav.Link>
                                                <Nav.Link href={"/resource"}>Resource Center</Nav.Link>
                                                <Nav.Link href={"/login"}>Login</Nav.Link>
                                                <Nav.Link href={"/sign-up"}>Sign-Up</Nav.Link>
                                            </Nav>
                                        </div>
                             </Navbar.Collapse>
                        </div>
                    </Navbar>
            </div>
                

        );
    }
}
export default Menu;