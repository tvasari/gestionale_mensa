import React, { Fragment } from 'react';
import WorkBenchTopBar from 'components/WorkBenchTopBar';
import Chart from 'pages/Statistiche/Chart';
import { SelectorCategoria, SelectorAnno, SelectorMese} from 'components/Selectors/';

const headers = [
  <SelectorMese/>,
  <SelectorAnno/>,
  <SelectorCategoria/>,
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