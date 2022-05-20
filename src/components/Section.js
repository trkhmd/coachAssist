import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';

import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import useStyles from '../styles/styles';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
const Section = () => {
    const classes = useStyles();

    const sectionItems = [
        {
            id: 1,
            icon: <GroupsIcon sx={{ fontSize: 100 }}  />,
            sentence:
                'Creez votre équipe et entrez vos informations',
        },
        {
            id: 2,
            icon: <AppRegistrationIcon sx={{ fontSize: 100 }}  />,
            sentence:
                'Enregistrez vos joueurs ainsi que leurs statistiques',
        },
        {
            id: 3,
            icon: <AutoGraphIcon sx={{ fontSize: 100 }}  />,
            sentence: 'Observez les progrès de vos joueurs',
        },
    ];
    return (
        <Box sx={{ flexGrow: 1, minHeight: '300px' }}>
            <Grid container className={classes.sectionGridContainer}>
                {sectionItems.map((item) => (
                    <Grid
                        item
                        xs={12}
                        md={3.5}
                        minHeight={200}
                        key={item.id}
                        className={classes.sectionGridItem}
                    >
                        {item.icon}
                        <Typography>{item.sentence}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Section;