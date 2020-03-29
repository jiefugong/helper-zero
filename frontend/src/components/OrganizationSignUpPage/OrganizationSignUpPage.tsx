import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import BasicInfoForm from './Steps/BasicInfoForm';
import DonationRequestForm from './Steps/DonationRequestForm';
import DeliveryMethodForm from './Steps/DeliveryMethodForm';
import ConfirmationPage from './Steps/ConfirmationPage';

const OrganizationSignupPage = () => {
  const [formData, setFormData] = React.useState({});
  const [progress, setProgress] = React.useState(2);

  const handleNext = (data) => {
    setFormData({...formData, ...data});
    console.log(formData);
    setProgress(progress+1);
  }

  const handleBack = () => {
    setProgress(progress-1);
  }

  return (
    <>
      {/* TODO: add Header component */}
      <Container maxWidth="lg">
        <Box m={6}>
          <Typography variant="h1">
            Create Profile
          </Typography>
          {/* TODO Progress Bar */}

          {progress === 0 && (
            <BasicInfoForm onNext={handleNext} onBack={handleBack}/>
          )}
          {progress === 1 && (
            <DonationRequestForm onNext={handleNext} onBack={handleBack}/>
          )}
          {progress === 2 && (
            <DeliveryMethodForm onNext={handleNext} onBack={handleBack}/>
          )}
          {progress === 3 && (
            <ConfirmationPage />
          )}
        </Box>
      </Container>
    </>
  );
}

export default OrganizationSignupPage;