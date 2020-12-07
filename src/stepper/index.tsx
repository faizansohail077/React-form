import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Signup from "../Signup";
import Payment from "../Payment";
import Review from "../Review";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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
  return [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
  ];
}

function getStepContent(
  stepIndex: any,
  setStep: any,
  formValue: any,
  setFormValue: any
) {
  switch (stepIndex) {
    case 0:
      return (
        <Signup
          submit={setStep}
          value={formValue}
          setFormValues={setFormValue}
        />
      );
    case 1:
      return (
        <Payment
          submit={setStep}
          value={formValue}
          setFormValues={setFormValue}
        />
      );
    case 2:
      return <Review submit={setStep} value={formValue} />;
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValue, setFormValue] = React.useState({});
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepContent(activeStep, setActiveStep, formValue, setFormValue)}
    </div>
  );
}
