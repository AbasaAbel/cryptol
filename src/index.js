import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Login from "./site/login";
import Signup from "./site/signup";
import Pricing from "./site/pricing";
import Counta from "./site/signals";

import { Switch, Route } from 'react-router';
import { BrowserRouter} from 'react-router-dom';

const routes = (
    <div>
      <BrowserRouter>
              <Switch>
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/sign-up' component={Signup} />
                  <Route exact path='/pricing' component={Pricing} />
                  <Route exact path='/resource' component={Counta} />
                  <Route exact path='/' component={App} />
                  <Route component={App} />
              </Switch>
  
          </BrowserRouter>
      </div>
  );
  

ReactDOM.render(routes, document.body);
