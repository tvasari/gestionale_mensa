import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TableContainer, Table, TableBody, TableRow, TableCell, Paper 
} from '@material-ui/core/';
import BackArrowButton from 'components/BackArrowButton';
import { SelectorAnno, SelectorMese } from 'components/Selectors';
import WorkBenchTopBar from 'components/WorkBenchTopBar';
import Calendar from 'utils/Calendar';
import staticText from "staticText.json";

const useStyles = makeStyles(theme => ({
  container: {...theme.workBench, overflow: 'auto', maxHeight: '80vh'},
  datePadding: {
    padding: '0 0 0 16px'
  }
}));

const primiPiatti = Calendar.getAllMonthDays(2020, 8).map(() => {
  return <TableCell>Pasta aglio olio e peperoncino</TableCell>
});

const weekDays = style => {
  Calendar.getAllMonthDays(2020, 8).map(day => {
    return <TableCell className={style}><b>{ day }</b></TableCell>
  });
};


const SintesiMese = () => {
  const classes = useStyles();
  const { pranzo, cena, primi, secondi } = staticText.SintesiMenu;
  const [mese, setMese] = useState('Gennaio');
  const [anno, setAnno] = useState('2020');

  return (
    <Fragment>
      <WorkBenchTopBar>
        <BackArrowButton id="sMenuBackArrow" path="menù" />
        <SelectorMese id="sMenuMese" setMese={setMese} mese={mese}/>
        <SelectorAnno id="sMenuAnno" setAnno={setAnno} anno={anno}/>
      </WorkBenchTopBar>
      <TableContainer component={Paper} className={classes.container}>
        <Table>
          <TableBody>

            <TableRow>
              <TableCell colSpan={2}></TableCell>
              { weekDays(classes.datePadding) }
            </TableRow>

            <TableRow>
              <TableCell rowSpan={4}><b>{ pranzo }</b></TableCell>
              <TableCell rowSpan={2}><b>{ primi }</b></TableCell>
              { primiPiatti }
            </TableRow>
            <TableRow>{ primiPiatti }</TableRow>
            <TableRow>
              <TableCell rowSpan={2}><b>{ secondi }</b></TableCell>
              { primiPiatti }
            </TableRow>
            <TableRow>{ primiPiatti }</TableRow>

            <TableRow><TableCell colSpan={primiPiatti.length + 2}></TableCell></TableRow>

            <TableRow>
                <TableCell rowSpan={4}><b>{ cena }</b></TableCell>
              <TableCell rowSpan={2}><b>{ primi }</b></TableCell>
              { primiPiatti }
            </TableRow>
            <TableRow>{ primiPiatti }</TableRow>
            <TableRow>
              <TableCell rowSpan={2}><b>{ secondi }</b></TableCell>
              { primiPiatti }
            </TableRow>
            <TableRow>{ primiPiatti }</TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default SintesiMese;