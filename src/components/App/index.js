import React from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Home from '../Home';
import Header from '../Header';

const styles = {
  container: {
    padding: '30px 15px',
  },
};

const App = ({ classes }) => (
  <main>
    <Header />
    <div className={classes.container}>
      <Route exact path="/" component={Home} />
    </div>
  </main>
);

export default withStyles(styles)(App);
