import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import MonthlyTable from './components/MonthlyTable/MonthlyTable';
import MenuTable from './components/MenuTable/MenuTable';


class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/Mese" component={MonthlyTable} />
            <Route path="/Menù" component={MenuTable} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
