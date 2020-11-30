import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import { LoadedUserProvider } from './utils/LoadedUser';

const App = () => {
  const [loadedUser, setLoadedUser] = useState("");

  return (
    <div className="App">
      <AppTheme>
        <Router>
          <Switch>
            <Route path="/registrati" component={Registrati} />
            <Route path="/accedi">
              <Accedi setLoadedUser={setLoadedUser} />
            </Route>
            <LoadedUserProvider user={loadedUser}>
              <PrivateRoute path="/italiana-mense-gestionale" component={<PresenzeMese />} />
              <PrivateRoute path="/presenze-mese" component={<PresenzeMese />} />
              <PrivateRoute path="/menù" component={<Menu />} />
              <PrivateRoute path="/costo-pasto" component={<CostoPasto />} />
              <PrivateRoute path="/sintesi-del-mese" component={<SintesiMenu />} />
              <PrivateRoute path="/ristorazione" component={<Ristorazione />} />
              <PrivateRoute path="/magazzino" component={<TuttiMagazzini />} />
              <PrivateRoute path="/arquata-1" component={<Magazzino />} />
              <PrivateRoute path="/storico" component={<Storico />} />
              <PrivateRoute path="/ddt" component={<DDT />} />
              <PrivateRoute path="/rimanenze" component={<Rimanenze />} />
              <PrivateRoute path="/display-rimanenza" component={<DisplayRimanenza />} />
              <PrivateRoute path="/statistiche" component={<Statistiche />} />
            </LoadedUserProvider>
          </Switch>
        </Router>
      </AppTheme>
    </div>
  );
}

export default App;
