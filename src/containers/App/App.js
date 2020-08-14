import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from 'components/Navbar/Navbar';
import PresenzeMese from 'pages/PresenzeMese/PresenzeMese';
import Menu from 'pages/Menu/Menu';
import CostoPasto from 'pages/CostoPasto/CostoPasto';
import SintesiMenu from 'pages/SintesiMenu/SintesiMenu';
import Ristorazione from 'pages/Ristorazione/Ristorazione';
import Registrati from 'pages/Registrati';
import Accedi from 'pages/Accedi';
import AppTheme from 'utils/AppTheme';
import Magazzino from 'pages/Magazzino/Magazzino';
import TuttiMagazzini from 'pages/Magazzino/ListaMagazzini';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AppTheme>
          <Router>
            <Switch>
              <Route path="/registrati">
                <Registrati />
              </Route>
              <Route path="/accedi">
                <Accedi />
              </Route>
              <Route exact path="/gestionale_mensa">
                <Navbar />
                <PresenzeMese />
              </Route>
              <Route path="/mese">
                <Navbar />
                <PresenzeMese />
              </Route>
              <Route path="/menù">
                <Navbar />
                <Menu />
              </Route>
              <Route path="/costo_pasto">
                <Navbar />
                <CostoPasto />
              </Route>
              <Route path="/sintesi_del_mese">
                <Navbar />
                <SintesiMenu />
              </Route>
              <Route path="/ristorazione">
                <Navbar />
                <Ristorazione />
              </Route>
              <Route path="/magazzino">
                <Navbar />
                <TuttiMagazzini />
              </Route>
              <Route path="/arquata_1">
                <Navbar />
                <Magazzino />
              </Route>
            </Switch>
          </Router>
        </AppTheme>
      </div>
    );
  }

}

export default App;
