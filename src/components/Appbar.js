import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import useStyles from "../styles/styles";

export default function ButtonAppBar() {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" id={"appbar"} className={classes.Appbar} >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    <SportsSoccerIcon href={"/"} />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        AssistCoaching
                    </Typography>
                    <Button href="/" color="inherit">Accueil</Button>
                    <Button href="/teams" color="inherit">Mes Equipes</Button>

                    <a id="whiteboard" href={process.env.PUBLIC_URL + "whiteboard.html"} > whiteboard</a>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
