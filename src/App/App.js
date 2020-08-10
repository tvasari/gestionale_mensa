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
            <Route exact path="/Gestionale_Mensa" component={MonthlyTable} />
            <Route exact path="/Mese" component={MonthlyTable} />
            <Route path="/Menù" component={MenuTable} />
            <Route path="/CostoPasto" component={CostoPasto} />
            <Route path="/SintesiMese" component={SintesiMese} />
            <Route path="/Ristorazione" component={Ristorazione} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
