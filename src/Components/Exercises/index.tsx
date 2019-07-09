import React from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

export default (props: any) => (
  <Grid container>
    <Grid item sm>
      <LeftPane style={styles} />
    </Grid>
    <Grid item sm>
      <RightPane style={styles} />
    </Grid>
  </Grid>
);
