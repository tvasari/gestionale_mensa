import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Button, CssBaseline, TextField, Link, Grid, Typography, Container
} from '@material-ui/core/';
import authentication from 'utils/authentication';
import staticText from 'staticText.json';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Accedi = ({ setLoadedUser }: any) => {
  const classes = useStyles();
  const { Accedi } = staticText;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({});
  const history = useHistory();

  let accedi = () => {
    authentication.authenticate();
    history.push('/italiana-mense-gestionale');
  }

  const submitLoginDetails = (email: string, password: string) => {
    fetch(`http://localhost:3001/utenti?email=${email}&password=${password}`, {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
    })
      .then(response => response.json())
      .then(user => {
        setLoadedUser(`${user[0].nome} ${user[0].cognome}`);
        accedi()
      }) 
      .catch(err => console.log("errore durante l'accesso", err))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5"> {Accedi.login} </Typography>
        {/* Messaggio di risposta alle varie casistiche di accesso (colorato verde/rosso)
            DA RE IMPLEMENTARE 
          <Typography component='p' variant="body1" color={message.color}>
            { message.message }
          </Typography> 
        */}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={Accedi.email}
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={Accedi.password}
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => submitLoginDetails(email, password)}
          >
            {Accedi.login}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {Accedi.forgot}
              </Link>
            </Grid>
            <Grid item>
            <NavLink to="/registrati" style={{textDecoration: 'none'}}>
              {Accedi.notRegistered}
            </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Accedi;