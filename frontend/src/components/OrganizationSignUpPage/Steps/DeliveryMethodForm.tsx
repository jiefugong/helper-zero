import React from "react";
import Typography from '@material-ui/core/Typography';
import { Button, FormControlLabel, Checkbox, FormGroup } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Form } from 'react-final-form';
import {
  Checkboxes,
  CheckboxData
} from 'mui-rff';

import DeliveryDetailForm from './DeliveryDetailForm';

const PICKUP = 'pickup';
const DELIVERY = 'delivery';
const MAIL = 'mail';

const checkboxForm: CheckboxData[] = [
  {label: "Pick-up at donator’s location", value: PICKUP},
  {label: "Receive drop-offs at designated location", value: DELIVERY},
  {label: "Receive mailed deliveries", value: MAIL}
];

const DeliveryMethodForm = ({onNext, onBack}) => {
  const [deliveryDetails, setDeliveryDetails] = React.useState({
    PICKUP: null,
    DELIVERY: null,
    MAIL: null,
  });

  const handleDeliveryDetailData = (type) => (data) => {
    setDeliveryDetails({...deliveryDetails, [type]: data});
  }

  return (
    <Form
      onSubmit={onNext}
      initialValues={{
        methods: [],
      }}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          {JSON.stringify(values)}
          <Typography variant="h2">
            Perferred Delivery Method
          </Typography>
          <Typography variant="body1">
            How would you like to receive your donations?
          </Typography>
          <Checkboxes
            name="methods"
            required={true}
            data={checkboxForm}
          />
          <Box mt={6}>
            <Typography variant="h2">
              Delivery Details
            </Typography>
          </Box>
          {values.methods.map(method => (
            <DeliveryDetailForm type={method} onChange={handleDeliveryDetailData(method)}/>
          ))}
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
  )
};

export default DeliveryMethodForm;