const elementiRistorazione = {
  primi: {
    'pasta aglio olio e peperoncino': {
      ingredienti: {
        aglio: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        },
        olio: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        },
        peperoncino: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        }
      }
    },
    'penne al pesto': {
      ingredienti: {
        pesto: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        },
        olio: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        },
        parmigiano: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        }
      }
    }
  },
  secondi: {
    'pollo alla cacciatora': {
      ingredienti: {
        aglio: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        },
        olio: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        },
        peperoncino: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        }
      }
    }
  },
  contorni: {},
  pane: {},
  bibite: {},
  'frutta e dessert': {},
  condimenti: {},
  suppellettili: {}
}

const costoPastoHeaderLabels = [
  "Ingredienti",
  "Quantità",
  "UM",
  "Costo/UM",
  "Totale per ingrediente"
]

const magazzinoHeaderLabels = [
  "Ortofrutta",
  "Quantità", 
  "UM", 
  "Costo/UM", 
  "Tot."
]

const numeriRandom = magazzinoHeaderLabels.map(() => parseInt((Math.random() * 101).toFixed(0)))
numeriRandom.pop();

const magazzinoRows = {
  "Olive": [...numeriRandom],
  "Fagioli": [...numeriRandom],
  "Tonno": [...numeriRandom],
  "Pomodori": [...numeriRandom]
}

const courses = [
  'Primo Piatto',
  'Secondo Piatto',
  'Contorno',
  'Frutta/Dessert'
]

export {
  elementiRistorazione,
  costoPastoHeaderLabels,
  magazzinoHeaderLabels,
  magazzinoRows,
  courses,
};