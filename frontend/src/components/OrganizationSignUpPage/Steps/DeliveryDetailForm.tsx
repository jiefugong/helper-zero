import React from "react";
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';

const styles: { [key: string]: React.CSSProperties } = {
  button: {
    marginRight: 10,
    marginBottom: 10,
  },
  textarea: {
    border: "1px solid #718AA8",
    boxSizing: "border-box",
    borderRadius: 6,
  },
};

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const DeliveryDetailForm = ({type, onChange}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [timeFrameText, setTimeFrameText] = React.useState('');
  const [pickDay, setPickDay] = React.useState('');

  const [deliveryDetails, setDeliveryDetails] = React.useState({
    instruction: '',
    timeFrames: {
      Sunday: [],
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
    }
  });

  const handleClick = (event) => {
    setPickDay(event.currentTarget.id);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    if (pickDay) {
      let newDateToTimeFrames = deliveryDetails;
      newDateToTimeFrames.timeFrames[pickDay] = timeFrameText.split(',');
      setDeliveryDetails(newDateToTimeFrames);
      onChange(newDateToTimeFrames);
    }
    setTimeFrameText('');
    setPickDay('');
    setAnchorEl(null);
  };

  const handleInstruction = (event) => {
    setDeliveryDetails({...deliveryDetails, instruction: event.target.value});
    onChange(deliveryDetails);
  };

  return (
    <>
      <Box mt={3}>
        <Typography variant="h3">
          Drop-off Instructions
        </Typography>
        <Typography variant="body1">
          Tell your donators how you would like them to drop off their donations. 
        </Typography>
        <Box pt={2}>
          <textarea rows={5} cols={100} value={deliveryDetails.instruction} style={styles.textarea} onChange={handleInstruction}/>
        </Box>
      </Box>
      <Box mt={4}>
        <Typography variant="body1">
          Create a drop-off windows for when you want donators to drop-off donations. 
        </Typography>
        <Box pt={3}>
          <Typography variant="h4">
            Select Available Days
          </Typography>
          <Box pt={2}>
            <Grid container spacing={1}>
              {days.map(day => (
                <Grid item>
                  <Button id={day} variant="outlined" onClick={handleClick} style={styles.button}>
                    {day}
                  </Button>
                  <Box>
                    {deliveryDetails.timeFrames[day].map(dateToTimeFrame => (
                      <Typography variant="body1">
                        {dateToTimeFrame}
                      </Typography>
                    ))}
                  </Box>
                  <Popover
                    id={day}
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >
                    <Box p={2}>
                      <Typography variant="body1">
                        Add Times
                      </Typography>
                      <Box pt={2}>
                        <textarea rows={5} cols={30} value={timeFrameText} style={styles.textarea} onChange={(e)=> setTimeFrameText(e.target.value)}/>
                      </Box>
                      <Box style={{textAlign: 'right'}}>
                        <Button onClick={handleClose}>
                          Save
                        </Button>
                      </Box>
                    </Box>
                  </Popover>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  )
};

export default DeliveryDetailForm;