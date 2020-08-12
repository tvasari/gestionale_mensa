import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from '../components/Navbar/Navbar';
import PresenzeMese from '../pages/PresenzeMese/PresenzeMese';
import Menu from '../pages/Menu/Menu';
import CostoPasto from '../pages/CostoPasto/CostoPasto';
import SintesiMenu from '../pages/SintesiMenu/SintesiMenu';
import Ristorazione from '../pages/Ristorazione/Ristorazione';
import AppTheme from '../utils/AppTheme';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AppTheme>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/gestionale_mensa" component={PresenzeMese} />
              <Route exact path="/mese" component={PresenzeMese} />
              <Route path="/menù" component={Menu} />
              <Route path="/costo_pasto" component={CostoPasto} />
              <Route path="/sintesi_menu" component={SintesiMenu} />
              <Route path="/ristorazione" component={Ristorazione} />
            </Switch>
          </BrowserRouter>
        </AppTheme>
      </div>
    );
  }

}

export default App;
