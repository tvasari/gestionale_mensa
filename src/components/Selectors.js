import React, { useState } from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';

const Selector = ({ label, options, disabled=false, setInputValue, inputValue }) => {

  return(
    <FormControl style={{padding: '0 20px'}} disabled={disabled}>
      <InputLabel style={{padding: '0 20px'}}>{ label }</InputLabel>
      <Select
        value={inputValue}
        label={`${label}`} 
        onChange={e => setInputValue(e.target.value)} 
        native
      >
        {
          options.map((option, i) => {
            return <option value={option} key={option + i}>{ option }</option>
          })
        }
      </Select>
    </FormControl>
  );
};

const SelectorPresenze = ({ setAzienda, azienda }) => {
  return( 
    <Selector
      inputValue={azienda}
      setInputValue={setAzienda} 
      label="Presenze" 
      options={['Cociv', 'Radimero', 'Altri']} 
    />
  );
}

const SelectorRistorazione = () => {
  return <Selector label="Aggiungi" options={['Piatto', 'Ingrediente']} />
}

const SelectorCategoria = () => {
  return <Selector label="Categoria" options={["Ortofrutta", "Carne Gelo", "Secco"]} />
}

const SelectorMese = ({ disabled=false, setMese, mese }) => {
  const mesi = [
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

  return(
    <Selector 
      setInputValue={setMese} 
      inputValue={mese} 
      label="Mese" 
      options={mesi} 
      disabled={disabled}
    />
  );
}

const SelectorAnno = ({ setAnno, anno }) => {
  const anni = (() => {
    const allYears = [];

    for (let i = 2010; i <= 2100; i++) {
        allYears.push(i.toString())
    }

    return allYears;
  })();

  return <Selector setInputValue={setAnno} inputValue={anno} label="Anno" options={anni} />
}

const SelectorPasti = ({ setPasto, pasto}) => {
  return(
    <Selector 
      setInputValue={setPasto} 
      inputValue={pasto} 
      label="Filtra" 
      options={["Colazione", "Pranzo", "Cena", "Spuntini"]} 
    />
  );
}

const SelectorUM = () => {
  return <Selector label="UM" options={["Kg"]} />
}

const SelectorPastiPrincipali = () => {
  return <Selector label="Pranzo/Cena" options={["Pranzo", "Cena"]} />
}

export {
  SelectorPresenze,
  SelectorRistorazione,
  SelectorCategoria,
  SelectorMese,
  SelectorAnno,
  SelectorPasti,
  SelectorUM,
  SelectorPastiPrincipali
};