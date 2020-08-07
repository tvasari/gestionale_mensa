import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from '../../components/Navbar/Navbar';
import MonthlyTable from '../../components/MonthlyTable/MonthlyTable';
import MenuTable from '../../components/MenuTable/MenuTable';
import CostoPasto from '../CostoPasto/CostoPasto';
import SintesiMese from '../../components/SintesiMese/SintesiMese';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/Mese" component={MonthlyTable} />
            <Route path="/Menù" component={MenuTable} />
            <Route path="/CostoPasto" component={CostoPasto} />
            <Route path="/SintesiMese" component={SintesiMese} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
