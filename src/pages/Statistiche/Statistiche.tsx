import React, { Fragment, useState } from 'react';
import WorkBenchTopBar from 'components/WorkBenchTopBar';
import Chart from 'pages/Statistiche/Chart';
import { SelectorAnno, SelectorMese, SelectorPastiPrincipali } from 'components/Selectors';
import RadioSelector from 'pages/Statistiche/RadioSelector';


const Statistiche = () => {
  const [pastoPrincipale, setPastoPrincipale] = useState("");
  const [mese, setMese] = useState('Gennaio');
  const [anno, setAnno] = useState('2020');

  return (
    <Fragment>
      <WorkBenchTopBar>
        <RadioSelector/>,
        <SelectorMese id="statMese" disabled={true} setMese={setMese} mese={mese}/>,
        <SelectorAnno id="statAnno" setAnno={setAnno} anno={anno}/>,
        <SelectorPastiPrincipali 
          id="statPasti" 
          setPastoPrincipale={setPastoPrincipale} 
          pastoPrincipale={pastoPrincipale}
        />
      </WorkBenchTopBar>
      <div style={{width: '80%', float: 'right', marginTop: '50px'}}>
        <Chart />
      </div>
    </Fragment>
  );
}

export default Statistiche;