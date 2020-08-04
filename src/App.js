import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import CustomTable from './components/CustomTable/CustomTable';
import Menu from './components/Menu/Menu';


class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/Mese" component={CustomTable} />
            <Route path="/Menù" component={Menu} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
