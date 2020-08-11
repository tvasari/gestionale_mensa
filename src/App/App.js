import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from '../components/Navbar/Navbar';
import MonthlyTable from '../pages/MonthlyTable/MonthlyTable';
import MenuTable from '../pages/MenuTable/MenuTable';
import CostoPasto from '../pages/CostoPasto/CostoPasto';
import SintesiMese from '../pages/SintesiMese/SintesiMese';
import Ristorazione from '../pages/Ristorazione/Ristorazione';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/gestionale_mensa" component={MonthlyTable} />
            <Route exact path="/mese" component={MonthlyTable} />
            <Route path="/menù" component={MenuTable} />
            <Route path="/costo_pasto" component={CostoPasto} />
            <Route path="/sintesi_mese" component={SintesiMese} />
            <Route path="/ristorazione" component={Ristorazione} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
