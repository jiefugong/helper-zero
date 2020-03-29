import React from "react";
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Form } from 'react-final-form';
import {
  TextField,
} from 'mui-rff';

const contactInfoFields = [{
  param: "name",
  label: "First and Last Name",
}, {
  param: "phone",
  label: "Phone number",
}]

const organizationFields = [{
  param: "organization_name",
  label: "Organization Name",
},{
  param: "organization_type",
  label: "Organization Type",
},{
  param: "street_address",
  label: "Street Address",
},{
  param: "city",
  label: "City",
}]

const BasicInfoPage = ({onNext, onBack}) => {
  const validate = values => {
    const errors = {};

    organizationFields.map(field => {
      if(!values[field.param]){
        errors[field.param] = 'Required';
      }
    });
  
    contactInfoFields.map(field => {
      if(!values[field.param]){
        errors[field.param] = 'Required';
      }
    });
  
    return errors;
  };

  return (
    <Form
      onSubmit={onNext}
      initialValues={{}}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Grid container>
            <Grid item xs lg={5}>
              <Typography variant="h2">
                Organization
              </Typography>
              {organizationFields.map(field => (
                <TextField
                  name={field.param}
                  helperText={field.label}
                  fullWidth
                  margin="normal"
                  required={true}
                />
              ))}
              <Box mt={6}>
                <Typography variant="h2">
                  Contact Information
                </Typography>
              </Box>
              <Typography variant="body1">
                Let us know how to send you instructions on how to drop off your donations. 
              </Typography>
              {contactInfoFields.map(field => (
                <TextField
                  name={field.param}
                  helperText={field.label}
                  fullWidth
                  margin="normal"
                  required={true}
                />
              ))}
            </Grid>
          </Grid>
          <Box mt={6}>
            <Button type="submit" size="large" variant="outlined" color="primary">
              Next
            </Button>
            {' '}
            <Button size="large" variant="outlined" color="primary" onClick={onBack}>
              Back
            </Button>
          </Box>
        </form>
      )}
    />
  );
}

export default BasicInfoPage;