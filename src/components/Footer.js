import useStyles from "../styles/styles";
import React from 'react';

import Box from "@mui/material/Box";
import {Link} from "@mui/material";
import univ from "../images/logoLille.png";
import club from "../images/LogoEpinettes.jpg";



export const Footer = () => {
    const classes = useStyles();
    return(
<Box sx={{ flexGrow: 1 }} className={classes.footer}>

    <a href="https://www.univ-lille.fr/" underline="none" >
        <img src={univ} alt="université de Lille" className={classes.footerImage} />

    </a>
    <a href="https://www.fff.fr/competition/club/535149-f-c-epinette-maubeuge/resultats-et-calendrier.html" className={classes.footerImage} >
        <img src={club} alt="université de Lille"  />

    </a>

</Box>
    );
}


export default Footer;