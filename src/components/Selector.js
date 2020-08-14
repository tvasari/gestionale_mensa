import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  fontColor: {
      color: theme.palette.primary.main
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

const categories = [
  'Ortofrutta',
  'Carne Gelo',
  'Secco'
]

const yearsCreator = () => {
  const years = [];

  for (let i = 2010; i <= 2100; i++) {
      years.push(i)
  }

  return years;
};

const Selector = ({ type, variant, formControlStyle }) => {
  const classes = useStyles();

  let array;

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
    case 'Categoria':
      array = categories;
    break;
    default:
      throw new Error();
  }

  return(
    <FormControl className={formControlStyle}>
      <InputLabel>{type}</InputLabel>
      <Select label={type} variant={variant} onChange={e => console.log(e.target.value)} native>
        {
          array.map((data, i) => {
            return <option className={classes.fontColor} value={data} key={data + i}>{data}</option>
          })
        }
      </Select>
    </FormControl>
  );
};

export default Selector;