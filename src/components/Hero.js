import React from 'react';

import { Grid, Typography, Button, Box } from '@mui/material';
import myteam from '../images/myteam.jpg';
import useStyles from '../styles/styles';



export const Hero = () => {
    const classes = useStyles();
    return (
        <Box className={classes.heroBox}>
            <Grid container spacing={6} className={classes.gridContainer}>
                <Grid itemID xs={12} md={7}>
                    <Typography variant={"h3"} fontWeight={700} className={classes.title}>
                        Ameliorez votre equipe
                    </Typography>
                    <Typography variant={"h6"} className={classes.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisi eu blandit consectetur,
                        nisl nunc consectetur nunc, eget consectetur nunc
                        nunc velit eget nunc.
                    </Typography>
                    <Button  href={'/add'} variant="contained" id={"boutton"} className={classes.button}>
                        Lancez vous
                    </Button>
                </Grid>
                <Grid itemID xs={12} md={5}>
                    <img src={myteam} alt="myteam" className={classes.largeImage} />
                </Grid>
            </Grid>
        </Box>

    )
}
export default Hero;
