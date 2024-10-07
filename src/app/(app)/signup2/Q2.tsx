"use client";

import React from 'react';
import { Typography, Box, Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/system';

type QuestionProps = {
  label: string;
  min: number;
  max: number;
  index: number;
};

// スタイルをカスタマイズしたボタン
const RoundButton = styled(Button)<ButtonProps>({
  borderRadius: '50%',
  minWidth: '40px',
  minHeight: '40px',
  margin: '0 8px',
  padding: '0',
  lineHeight: '40px',
});

const Line = styled('div')({
  flexGrow: 1,
  height: '2px',
  backgroundColor: '#ccc',
  alignSelf: 'center',
});

const Questionnaire = ({ label, min, max, index }: QuestionProps) => {
  const [activeValue, setActiveValue] = React.useState<number | null>(null);

  const handleButtonClick = (value: number) => {
    setActiveValue(value);
  };

  return (
    <Box mb={4}>
      <Typography variant="h6">{label}</Typography>
      <Box display="flex" alignItems="center">
        {Array.from({ length: max - min + 1 }, (_, i) => i + min).map((value, idx, arr) => (
          <React.Fragment key={value}>
            <RoundButton
              variant={activeValue !== null && value <= activeValue ? "contained" : "outlined"}
              onClick={() => handleButtonClick(value)}
            >
              {value}
            </RoundButton>
            {idx < arr.length - 1 && <Line />}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default Questionnaire;   