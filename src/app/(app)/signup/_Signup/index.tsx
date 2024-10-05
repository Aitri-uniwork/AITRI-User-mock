"use client";

import {Box, Button, Stack, Typography} from "@mui/material";

import Stepper from "../_Stepper";
import Question from "./Question";
import { useState } from "react";
import questions from "@/questions.json";
import { useRouter } from "next/navigation";

const styles = {
    container: {
        bgcolor: "white",
        width: "100%",
        height: "100%",
        maxWidth: "460px",
        p: 2,
    },
    header: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        
    },
    content: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    footer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        py: 2,
    },
    input: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        width: "100%",
    },
} 

const Signup = () => {
    const [count, setCount] = useState(0);

    const router = useRouter();
    const handleCount = () => {
        if (count === questions.length - 1) {
            router.push("/");
        } else {
            setCount(count + 1);
        }
    }

    return (
        <Stack direction="column" sx={styles.container}>
            <Stack direction="column" gap={2} sx={styles.header}>
                <Stepper steps={questions.length} activeStep={count} />
                <Typography>サインアップ</Typography>
            </Stack>
            <Box sx={styles.content}>
                <Question 
                    label={questions[count].question} 
                    placeholder={questions[count].placeholder} 
                />
            </Box>
            <Box sx={styles.footer}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleCount}
                >
                    次へ
                </Button>
            </Box>
        </Stack>
    )
}

export default Signup;

