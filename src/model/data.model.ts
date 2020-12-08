import { Theme } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {

  interface Theme {

    container: {
      maxHeight: '90vh',
      overflow: 'auto'
    },
    workBench: {
      width: '80%',
      float: 'right'
    }
  
  }

  interface ThemeOptions {

    container?: {
      maxHeight?: '90vh',
      overflow?: 'auto'
    },
    workBench?: {
      width?: '80%',
      float?: 'right'
    }
  
  }

}

export interface Presenza {
  nome_azienda: string;
  nome_pasto: string;
  data: Date,
  type: string
  numero_presenze: number
}