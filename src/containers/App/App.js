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
import Storico from 'pages/Magazzino/Storico';

const FramedRoute = ({ path, component }) => {
  return(
    <Route path={path}>
      <Navbar />
      { component }
    </Route>
  );
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <AppTheme>
          <Router>
            <Switch>
              <Route path="/registrati" component={Registrati} />
              <Route path="/accedi" component={Accedi} />
              <FramedRoute path="/gestionale_mensa" component={<PresenzeMese />} />
              <FramedRoute path="/mese" component={<PresenzeMese />} />
              <FramedRoute path="/menù" component={<Menu />} />
              <FramedRoute path="/costo_pasto" component={<CostoPasto />} />
              <FramedRoute path="/sintesi_del_mese" component={<SintesiMenu />} />
              <FramedRoute path="/gestionale_mensa" component={<PresenzeMese />} />
              <FramedRoute path="/gestionale_mensa" component={<PresenzeMese />} />
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
              <Route path="/storico">
                <Navbar />
                <Storico />
              </Route>
            </Switch>
          </Router>
        </AppTheme>
      </div>
    );
  }

}

export default App;
