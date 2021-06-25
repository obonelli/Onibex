import React from 'react';
import { View, ScrollView } from 'react-native'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Text, StyleSheet} from 'react-native';
import ScheduleIcon from '@material-ui/icons/Schedule';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Hospital/Date', 'Surgeon/Rep Procedure', 'Products', 'Review Case'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Surgey';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

export default function CasesSteeps() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <ScrollView className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
              <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <View>
        {activeStep === steps.length ? (
          <View>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </View>
        ) : (
          <View>
            <Typography className={classes.instructions}>
                <Grid container spacing={3} style={{ marginLeft: 8}}>
                <Text style={{ fontSize: 14}}>{getStepContent(activeStep)}</Text>
                    <Grid container style={{ marginBottom: 8}}>
                        <Grid item xs={4}>
                        <TextField
                            className={classes.margin}
                            id="input-with-icon-textfield"
                            label="Surgey Date"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="end">
                                <DateRangeIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                className={classes.margin}
                                id="input-with-icon-textfield"
                                label="Surgey Time"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <ScheduleIcon />
                                    </InputAdornment>
                                ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                className={classes.margin}
                                id="input-with-icon-textfield"
                                label="Duration"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <ScheduleIcon />
                                    </InputAdornment>
                                ),
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container  style={{ marginBottom: 8}}>
                        <Grid item xs={4}>
                        <TextField
                            className={classes.margin}
                            id="input-with-icon-textfield"
                            label="Ship Date"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="end">
                                <DateRangeIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                className={classes.margin}
                                id="input-with-icon-textfield"
                                label="Due Date"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <DateRangeIcon />
                                    </InputAdornment>
                                ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                        <TextField
                            id="filled-select-currency-native"
                            select
                            label="Case Type"
                            SelectProps={{
                            native: true,
                            }}
                            variant="filled"
                        >
                            <option key='1' value='{option.value}'>
                            data 1
                            </option>
                        </TextField>
                        </Grid>
                    </Grid>
                    <Grid container style={{ marginBottom: 8}}>
                        <Grid item xs={4}>
                        <TextField
                            className={classes.margin}
                            id="input-with-icon-textfield"
                            label="Ship Method"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="end">
                                <DateRangeIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                className={classes.margin}
                                id="input-with-icon-textfield"
                                label="Ship-to Address"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <DateRangeIcon />
                                    </InputAdornment>
                                ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                        
                        </Grid>
                    </Grid>
                </Grid>
            
            </Typography>
            <br />
            <br />
            <View>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    marginVertical: 4,
    marginHorizontal: 16,
  }
})