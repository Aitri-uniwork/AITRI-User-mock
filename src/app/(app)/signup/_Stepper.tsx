"use client";

import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

type StepperProps = {
  steps: number;
  activeStep: number;
};

const Stepper = ({ steps, activeStep }: StepperProps) => {
  // const [activeStep, setActiveStep] = React.useState(0);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  return (
    <MobileStepper
      variant="dots"
      steps={steps}
      position="static"
      activeStep={activeStep}
      backButton={<></>}
      nextButton={<></>}
    />
  );
}

export default Stepper;
