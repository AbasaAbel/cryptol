import React from 'react';
import {Row, Container, Col} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Home from './site/home';
import Menu from "./site/menu";
import Footer from "./site/footer";
import "./assets/css/style.css";
import Menu2 from "./site/nav";

function App() {
  return (
        <div>
              <Menu2 />

              <div>
                <Home />
              </div>
              <br />
              <div>
              <Footer />
              </div>
         </div>
  );
}

export default App;
