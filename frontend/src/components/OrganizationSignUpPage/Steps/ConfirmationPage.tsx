import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PeopleOutlined from '@material-ui/icons/PeopleOutlined';
import DriveEtaOutlined from '@material-ui/icons/DriveEtaOutlined';
import TextField from '@material-ui/core/TextField';

const styles: { [key: string]: React.CSSProperties } = {
  headerTitle: {
    
  },
};

export default function ConfirmationPage() {
  return (
    <Grid container>
      <Grid item xs lg={5}>
          <Typography variant="h2">
            Thank you for your request, 
          </Typography>
          {/* TODO */}
      </Grid>
    </Grid>
  );
}
