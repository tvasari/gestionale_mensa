import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Gennaio', cena: 4000, pranzo: 2400, get totale() { return this.pranzo + this.cena }
  },
  {
    name: 'Febbraio', cena: 3000, pranzo: 1398, get totale() { return this.pranzo + this.cena },
  },
  {
    name: 'Marzo', cena: 2000, pranzo: 9800, get totale() { return this.pranzo + this.cena },
  },
  {
    name: 'Aprile', cena: 2780, pranzo: 3908, get totale() { return this.pranzo + this.cena },
  },
  {
    name: 'Maggio', cena: 1890, pranzo: 4800, get totale() { return this.pranzo + this.cena },
  },
  {
    name: 'Giugno', cena: 2390, pranzo: 3800, get totale() { return this.pranzo + this.cena },
  },
  {
    name: 'Luglio', cena: 3490, pranzo: 4300, get totale() { return this.pranzo + this.cena },
  },
  {
    name: 'Agosto', cena: 4000, pranzo: 2400, get totale() { return this.pranzo + this.cena },
  },
  {
    name: 'Settembre', cena: 3000, pranzo: 1398, get totale() { return this.pranzo + this.cena },
  },
  {
    name: 'Ottobre', cena: 2000, pranzo: 9800, get totale() { return this.pranzo + this.cena },
  },
  {
    name: 'Novembre', cena: 2780, pranzo: 3908, get totale() { return this.pranzo + this.cena },
  },
  {
    name: 'Dicembre', cena: 1890, pranzo: 4800, get totale() { return this.pranzo + this.cena },
  },
];

class Chart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <BarChart
        width={1050}
        height={450}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'costo in €', angle: -90, position: 'left' }}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="pranzo" fill="#8884d8" />
        <Bar dataKey="cena" fill="#82ca9d" />
        <Bar dataKey="totale" fill="#23b5d3" />
      </BarChart>
    );
  }
}

export default Chart;