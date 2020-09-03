import React, { Fragment } from 'react';
import WorkBenchTopBar from 'components/WorkBenchTopBar';
import Chart from 'pages/Statistiche/Chart';
import { SelectorAnno, SelectorMese, SelectorPastiPrincipali } from 'components/Selectors/';
import RadioSelector from 'pages/Statistiche/RadioSelector';

const headers = [
  <RadioSelector id="statRadio"/>,
  <SelectorMese id="statMese" disabled={true}/>,
  <SelectorAnno id="statAnno"/>,
  <SelectorPastiPrincipali id="statPasti"/>,
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