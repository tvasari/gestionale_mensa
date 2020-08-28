import React from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { presenze, opzioniRistorazione, categorie, mesi, anni, pasti, um } from 'utils/fakeData';

const Selector = ({ label, options }) => {
  return(
    <FormControl fullWidth>
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

const SelectorMese = () => {
  return <Selector label="Mese" options={mesi} />
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

export {
  SelectorPresenze,
  SelectorRistorazione,
  SelectorCategoria,
  SelectorMese,
  SelectorAnno,
  SelectorPasti,
  SelectorUM
};