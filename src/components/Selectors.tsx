import React from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import staticText from "staticText.json";

const { Selectors } = staticText;

const Selector = ({ label, options, disabled=false, setInputValue, inputValue }: any) => {

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
          options.map((option: any, i: number) => {
            return <option value={option} key={option + i}>{ option }</option>
          })
        }
      </Select>
    </FormControl>
  );
};

const SelectorPresenze = ({ setAzienda, azienda }: any) => {
  return( 
    <Selector
      inputValue={azienda}
      setInputValue={setAzienda} 
      label={Selectors.presenze}
      options={['Cociv', 'Radimero', 'Altri']} 
    />
  );
}

const SelectorRistorazione = ({ setTypeToAdd, typeToAdd }: any) => {
  return (
    <Selector 
      label={Selectors.aggiungi} 
      options={['Piatto', 'Ingrediente']} 
      setInputValue={setTypeToAdd} 
      inputValue={typeToAdd}
    />
  );
}

const SelectorCategoria = ({ setCategoria, categoria }: any) => {
  return(
    <Selector 
      label={Selectors.categoria} 
      options={["Ortofrutta", "Carne Gelo", "Secco"]}
      setInputValue={setCategoria}
      inputValue={categoria}
    />
  );
}

const SelectorMese = ({ setMese, mese }: any) => {
  const mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

  return <Selector setInputValue={setMese} inputValue={mese} label={Selectors.mese} options={mesi}/>;
}

const SelectorAnno = ({ setAnno, anno }: any) => {
  const anni = (() => {
    const allYears = [];

    for (let i = 2010; i <= 2100; i++) {
      allYears.push(i.toString())
    }

    return allYears;
  })();

  return <Selector setInputValue={setAnno} inputValue={anno} label={Selectors.anno} options={anni}/>
}

const SelectorPasti = ({ setPasto, pasto }: any) => {
  return(
    <Selector 
      setInputValue={setPasto} 
      inputValue={pasto} 
      label={Selectors.filtra} 
      options={["Colazione", "Pranzo", "Cena", "Spuntino"]} 
    />
  );
}

const SelectorUM = ({ setUm, um }: any) => {
  return <Selector label={Selectors.um} options={["Kg"]} setInputValue={setUm} inputValue={um}/>
}

const SelectorPastiPrincipali = ({ setPastoPrincipale, pastoPrincipale }: any) => {
  return(
    <Selector 
      label="Pranzo/Cena" 
      options={["Pranzo", "Cena"]} 
      setInputValue={setPastoPrincipale}
      inputValue={pastoPrincipale}
    />
  );
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