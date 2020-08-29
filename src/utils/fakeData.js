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

const pasti = [
  "Colazione", 
  "Pranzo", 
  "Cena", 
  "Spuntini"
];

const pastiPrincipali = [
  "Pranzo",
  "Cena"
]

const courses = [
  'Primo Piatto',
  'Secondo Piatto',
  'Contorno',
  'Frutta/Dessert'
]

const presenze = [
  'Cociv',
  'Radimero',
  'Altri'
];

const mesi = [
  'Gennaio', 
  'Febbraio', 
  'Marzo', 
  'Aprile', 
  'Maggio', 
  'Giugno', 
  'Luglio', 
  'Agosto', 
  'Settembre', 
  'Ottobre', 
  'Novembre', 
  'Dicembre'
];

const categorie = [
  'Ortofrutta',
  'Carne Gelo',
  'Secco'
]

const opzioniRistorazione = [
  'Piatto',
  'Ingrediente'
]

const um = [
  'Kg',
  'etti'
]

const anni = (() => {
  const allYears = [];

  for (let i = 2010; i <= 2100; i++) {
      allYears.push(i)
  }

  return allYears;
})();

export {
  elementiRistorazione,
  costoPastoHeaderLabels,
  magazzinoHeaderLabels,
  magazzinoRows,
  mesi,
  categorie,
  opzioniRistorazione,
  presenze,
  courses,
  pasti,
  pastiPrincipali,
  um,
  anni
};