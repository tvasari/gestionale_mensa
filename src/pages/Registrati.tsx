import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CssBaseline, TextField, Grid, Typography, Container } from '@material-ui/core/';
import staticText from 'staticText.json';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -63%)'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Registrati = () => {
  const classes = useStyles();
  const { Registrati } = staticText;
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const submitUserDetails = (nome: string, cognome: string, email: string, password: string) => {
    fetch('http://localhost:3000/utenti', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: nome,
        cognome: cognome,
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(registeredUser => {
        setMessage(`Benvenuto ${registeredUser.nome} ${registeredUser.cognome}`);
      })
      .catch(err => console.log("errore durante la registrazione", err))
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5"> {Registrati.register} </Typography>
        <Typography component='p' variant="body1">
          { message }
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label={Registrati.firstName}
                autoFocus
                onChange={(e) => setNome(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label={Registrati.lastName}
                name="lastName"
                autoComplete="lname"
                onChange={(e) => setCognome(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label={Registrati.email}
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label={Registrati.password}
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => submitUserDetails(nome, cognome, email, password)}
          >
            {Registrati.register}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink to="/accedi" style={{textDecoration: 'none'}}>
                {Registrati.isRegistered}
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Registrati;