import React from "react";

import {Avatar, Grid, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import GroupsIcon from '@mui/icons-material/Groups';
import useStyles from '../styles/styles';



const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));
export default function ListingTeam() {
    const teams = [{
        name:'U18',
        coach:'John'},
        {
            name:'U19',
            coach:'John'}];

    const classes = useStyles();
    const [dense] = React.useState(false);


    return(

        <>
        <Box className={classes.titre}>
            <h1>Mes equipes</h1><AddCircleIcon className={classes.icon}/>
        </Box>

    <Box className={classes.principalBox}>


        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>




        <Grid item xs={12} md={6} >

            <Demo>
                <List dense={dense} className={classes.ListingGrid}>
                    {teams.map(team => (
                        <ListItem key={team.name}>
                            <ListItemAvatar>
                                <Avatar>
                                    <GroupsIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={team.name} secondary={team.coach} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Demo>
        </Grid>
        </Box>
    </Box>
    </>

    );
}