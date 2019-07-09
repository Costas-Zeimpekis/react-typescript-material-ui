import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default (props: any) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" color="inherit">
          Exercise DataBase
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);
