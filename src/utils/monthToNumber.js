const monthToNumber = (month) => {
  switch(month) {
    case 'Gennaio':
      return 0;
    case 'Febbraio':
      return 1;
    case 'Marzo':
      return 2;
    case 'Aprile':
      return 3;
    case 'Maggio':
      return 4;
    case 'Giugno':
      return 5;
    case 'Luglio':
      return 6;
    case 'Agosto':
      return 7;
    case 'Settembre':
      return 8;
    case 'Ottobre':
      return 9;
    case 'Novembre':
      return 10;
    case 'Dicembre':
      return 11;
  }
}

export default monthToNumber;