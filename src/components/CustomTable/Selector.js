import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

const materialTheme = createMuiTheme({
    overrides: {
      MuiFormLabel: {
        root: {
          color: "white",
        },
      },
      MuiInputBase: {
        root: {
          color: "white",
        },
      },
    },
});

const Selector = ({ type, array, style }) => (
    <ThemeProvider theme={materialTheme}>
        <FormControl>
            <InputLabel className={style}>{type}</InputLabel>
            <Select onChange={e => console.log(e.target.value)} className={style} native>
                {
                    array.map((data, i) => {
                        return <option className={style} value={data} key={data + i}>{data}</option>
                    })
                }
            </Select>
        </FormControl>
    </ThemeProvider>
);

export default Selector;