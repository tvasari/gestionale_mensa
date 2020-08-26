import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Select, InputLabel } from '@material-ui/core/';
import { months, meals, courses, attendance, categories, options, magazzinoRows, um } from 'utils/fakeData';

const useStyles = makeStyles((theme) => ({
  fontColor: {
      color: theme.palette.primary.main
  }
}));

const yearsCreator = () => {
  const years = [];

  for (let i = 2010; i <= 2100; i++) {
      years.push(i)
  }

  return years;
};

const Selector = ({ type, variant, formControlStyle, fullWidth=false }) => {
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
    case 'Oggetti':
      array = Object.keys(magazzinoRows);
    break;
    case 'Aggiungi':
      array = options;
    break;
    case 'UM':
      array = um;
    break;
    default:
      throw new Error();
  }

  return(
    <FormControl fullWidth={fullWidth} variant={variant} className={formControlStyle}>
      <InputLabel>{type}</InputLabel>
      <Select label={type} onChange={e => console.log(e.target.value)} native>
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