"use client";

import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import { Box, Tooltip } from '@mui/material';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

type StepperProps = {
  steps: number;
  activeStep: number;
};
const Stepper = ({ steps, activeStep }: StepperProps) => {
  const RenderDots = () => {
    return (
      <Box display="flex" justifyContent="center">
        {Array.from({ length: steps }, (_, index) => (
          <Tooltip key={index} title={`Step ${index + 1}`}>
            <Box
              width={8}
              height={8}
              margin={0.5}
              borderRadius="50%"
              bgcolor={index === activeStep ? 'primary.main' : 'grey.400'}
            />
          </Tooltip>
        ))}
      </Box>
    );
  };
  // console.log("dots", renderDots);

  return (
    <MobileStepper
      variant="dots"
      steps={steps}
      position="static"
      activeStep={activeStep}
      backButton={<></>}
      nextButton={<></>}
      // Override the default dots with custom dots
      // LinearProgressProps={{component: RenderDots}}
    />
  );
}

export default Stepper;