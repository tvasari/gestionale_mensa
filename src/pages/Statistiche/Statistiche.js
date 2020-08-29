import React, { Fragment } from 'react';
import WorkBenchTopBar from 'components/WorkBenchTopBar';
import Chart from 'pages/Statistiche/Chart';
import { SelectorCategoria, SelectorAnno, SelectorMese, SelectorPastiPrincipali } from 'components/Selectors/';
import RadioSelector from 'pages/Statistiche/RadioSelector';

const headers = [
  <RadioSelector />,
  <SelectorMese disabled={true}/>,
  <SelectorAnno/>,
  <SelectorPastiPrincipali/>,
]

const Statistiche = () => {
  return (
    <Fragment>
      <WorkBenchTopBar headers={headers}/>
      <div style={{width: '80%', float: 'right', marginTop: '50px'}}>
        <Chart />
      </div>
    </Fragment>
  );
}

export default Statistiche;