"use client";

import {Box, TextField, Typography} from "@mui/material";

const styles = {
    content: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    input: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        width: "100%",
    },
}   

type QuestionProps = {
    label: string;
    placeholder: string;
}     
const Question = ({label, placeholder}: QuestionProps) => {
  return (
    <>
      <Box sx={styles.content}>
        <Box sx={styles.input}>   
            <TextField
                label={label}
                variant="outlined"
                fullWidth
            />
            <Typography my={2}>{placeholder}</Typography> 
        </Box>
      </Box>
    </>
  );
};

export default Question;
