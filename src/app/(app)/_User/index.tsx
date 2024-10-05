"use client";

import {Box, Typography} from "@mui/material";

import Card from "./_Card";
import BottomNavigation from "./_BottomNavigation";
import { Grid2 as Grid } from "@mui/material";
import data from "@/data.json";

const styles = {
    container: {
        bgcolor: "black",
        width: "100%",
        height: "100%",
        pb: 8,
        overflowY: "scroll",
    },
    grid: {
        px: {xs: 1, sm: 2},
    },
    navigation: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        maxWidth: "460px",
    },
    title: {
        color: "white",
        fontSize: "20px",
        width: "100%",
        py:2
    },
}

const User = () => {
    return (
        <Box sx={styles.container}>
            <Typography sx={styles.title}>オススメのイベント</Typography>
            <Grid 
                container 
                spacing={2} 
                sx={styles.grid}
                alignItems="center" 
                justifyContent="center"
            >
                {data.map((item) => (
                    <Grid key={item.title} size={{xs: 12, sm: 6}}>
                        <Card 
                            image={item.image} 
                            title={item.title} 
                            description={item.description} 
                        />
                    </Grid>
                ))}
            </Grid>
            <Box sx={styles.navigation}>
                <BottomNavigation />
            </Box>
        </Box>
    )
}

export default User;    
