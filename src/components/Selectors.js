import React from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { presenze, opzioniRistorazione, categorie, mesi, anni, pasti, pastiPrincipali, um } from 'utils/fakeData';

const Selector = ({ label, options, disabled=false }) => {
  return(
    <FormControl fullWidth disabled={disabled}>
      <InputLabel>{ label }</InputLabel>
      <Select label={`${label}`} onChange={e => console.log(e.target.value)} native>
        {
          options.map((option, i) => {
            return <option value={option} key={option + i}>{ option }</option>
          })
        }
      </Select>
    </FormControl>
  );
};

const SelectorPresenze = () => {
  return <Selector label="Presenze" options={presenze} />
}

const SelectorRistorazione = () => {
  return <Selector label="Aggiungi" options={opzioniRistorazione} />
}

const SelectorCategoria = () => {
  return <Selector label="Categoria" options={categorie} />
}

const SelectorMese = ({ disabled=false }) => {
  return <Selector label="Mese" options={mesi} disabled={disabled}/>
}

const SelectorAnno = () => {
  return <Selector label="Anno" options={anni} />
}

const SelectorPasti = () => {
  return <Selector label="Filtra" options={pasti} />
}

const SelectorUM = () => {
  return <Selector label="UM" options={um} />
}

const SelectorPastiPrincipali = () => {
  return <Selector label="Pranzo/Cena" options={pastiPrincipali} />
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