"use client";

import React from 'react';
import { Typography, Slider, Box } from '@mui/material';

type QuestionProps = {
  label: string;
  min: number;
  max: number;
  index: number;
} 
const Questionnaire = ({ label, min, max, index }: QuestionProps) => {
  const [values, setValues] = React.useState<number[]>(Array(5).fill(null));

  const handleSliderChange = (index: number) => (event: Event, newValue: number | number[]) => {
    const newValues = [...values];
    newValues[index] = newValue as number;
    setValues(newValues);
  };

  // const marks = Array.from({ length: max - min + 1 }, (_, i) => ({
  //   value: i + min,
  //   label: (i + min).toString(),
  // }));
  const marks = [
    { value: min, label: min.toString() },
    { value: max, label: max.toString() }
  ];


  return (
    <Box mb={4}>
      <Typography variant="h6">{label}</Typography>
      <Slider
        value={values[index]}
        onChange={handleSliderChange(index)}
        aria-labelledby={`slider-${index}`}
        valueLabelDisplay="auto"
        step={1}
        marks={marks} // Add marks to the slider
        min={min}
        max={max}
      />
    </Box>
  );
};

export default Questionnaire;