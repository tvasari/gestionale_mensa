import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useHistory } from 'react-router-dom';
import { 
  Button, CssBaseline, TextField, Link, Grid, Typography, Container
} from '@material-ui/core/';
import authentication from 'utils/authentication';

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

const Accedi = ({ setLoadedUser }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({});
  const history = useHistory();

  let accedi = () => {
    authentication.authenticate();
    history.push('/italiana-mense-gestionale');
  }

  const submitLoginDetails = (email, password) => {
    fetch('http://localhost:3001/accedi', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(responseMessage => {
        if (responseMessage.color !== "error") {
          setLoadedUser({fullName: responseMessage.message});
          accedi()
        } else {
          setMessage(responseMessage)
        }
      }) 
      .catch(err => console.log("errore durante l'accesso", err))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Accedi
        </Typography>
        <Typography component='p' variant="body1" color={message.color}>
          { message.message }
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Indirizzo Email"
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
            label="Password"
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
            Accedi
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Hai dimenticato la password?
              </Link>
            </Grid>
            <Grid item>
            <NavLink to="/registrati" style={{textDecoration: 'none'}}>
                Non hai un account? Registrati
            </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Accedi;