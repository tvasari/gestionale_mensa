import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'App.css';

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
import Storico from 'pages/Storico/Storico';
import DDT from 'pages/DDT/DDT';
import Rimanenze from 'pages/Rimanenze/Rimanenze';
import DisplayRimanenza from 'pages/Rimanenze/DisplayRimanenza';
import Statistiche from 'pages/Statistiche/Statistiche';
import PrivateRoute from 'components/PrivateRoute';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loadedUser: {
        name: ''
      }
    };
    this.setName = this.setName.bind(this);
  }

  setName = (nome) => {
    this.setState({
      loadedUser: {name: nome}
    })
  }

  render() {
    console.log(this.state.loadedUser)
    return (
      <div className="App">
        <AppTheme>
          <Router>
            <Switch>
              <Route path="/registrati" component={Registrati} />
              <Route path="/accedi">
                <Accedi setName={this.setName} />
              </Route>
              <PrivateRoute path="/italiana_mense_gestionale" component={<PresenzeMese />} />
              <PrivateRoute path="/mese" component={<PresenzeMese />} />
              <PrivateRoute path="/menù" component={<Menu />} />
              <PrivateRoute path="/costo_pasto" component={<CostoPasto />} />
              <PrivateRoute path="/sintesi_del_mese" component={<SintesiMenu />} />
              <PrivateRoute path="/ristorazione" component={<Ristorazione />} />
              <PrivateRoute path="/magazzino" component={<TuttiMagazzini />} />
              <PrivateRoute path="/arquata_1" component={<Magazzino />} />
              <PrivateRoute path="/storico" component={<Storico />} />
              <PrivateRoute path="/ddt" component={<DDT />} />
              <PrivateRoute path="/rimanenze" component={<Rimanenze />} />
              <PrivateRoute path="/display_rimanenza" component={<DisplayRimanenza />} />
              <PrivateRoute path="/statistiche" component={<Statistiche />} />
            </Switch>
          </Router>
        </AppTheme>
      </div>
    );
  }

}

export default App;
