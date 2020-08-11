import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  option: {
      color: '#1976d2'
  }
}));

const meals = [
  "Colazione", 
  "Pranzo", 
  "Cena", 
  "Spuntini"
];

const courses = [
  'Primo Piatto',
  'Secondo Piatto',
  'Contorno',
  'Frutta/Dessert'
]

const attendance = [
  'Cociv',
  'Radimero',
  'Altri'
];

const months = [
  'Gennaio', 
  'Febbraio', 
  'Marzo', 
  'Aprile', 
  'Maggio', 
  'Giugno', 
  'Luglio', 
  'Agosto', 
  'Settembre', 
  'Ottobre', 
  'Novembre', 
  'Dicembre'
];

const yearsCreator = () => {
  const years = [];

  for (let i = 2010; i <= 2100; i++) {
      years.push(i)
  }

  return years;
};

const Selector = ({ type, array, formControlStyle }) => {
  const classes = useStyles();

  switch(type) {
    case 'Anno':
      array = yearsCreator();
      break;
    case 'Mese':
      array = months;
      break;
    case 'Filtra':
      array = meals;
      break;
    case 'Tipo':
      array = courses;
      break;
    case 'Presenze':
      array = attendance;
      break;
    default:
      throw new Error();
  }

  return(
    <FormControl className={formControlStyle}>
      <InputLabel className={classes.option}>{type}</InputLabel>
      <Select onChange={e => console.log(e.target.value)} className={classes.option} native>
        {
          array.map((data, i) => {
            return <option className={classes.option} value={data} key={data + i}>{data}</option>
          })
        }
      </Select>
    </FormControl>
  );
};

export default Selector;