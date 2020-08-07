import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

const useStyles = makeStyles({
  option: {
      color: '#1976d2'
  }
});

const materialTheme = createMuiTheme({
    overrides: {
      MuiFormLabel: {
        root: {
          color: "white",
        },
      },
      MuiInputBase: {
        root: {
          color: "white",
        },
      },
    },
});

const meals = [
  "Colazione", 
  "Pranzo", 
  "Cena", 
  "Spuntini"
];

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

const Selector = ({ type, array }) => {
  const classes = useStyles();

  switch(type) {
    case 'Anno':
      array = yearsCreator();
      break;
    case 'Mese':
      array = months;
      break;
    case 'Tipo':
      array = meals;
      break;
    case 'Presenze':
      array = attendance;
      break;
    default:
      throw new Error();
  }

  return(
    <ThemeProvider theme={materialTheme}>
        <FormControl>
            <InputLabel className={classes.option}>{type}</InputLabel>
            <Select onChange={e => console.log(e.target.value)} className={classes.option} native>
                {
                    array.map((data, i) => {
                        return <option className={classes.option} value={data} key={data + i}>{data}</option>
                    })
                }
            </Select>
        </FormControl>
    </ThemeProvider>
  );
};

export default Selector;