import React, {useState} from "react";
import useStyles from "../styles/styles";
import Container from "@mui/material/Container";
import {ButtonGroup, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from "@mui/material/IconButton";

export default function AddTeam() {


    const paperStyle={padding:'50px 20px', width:600,margin:'20px auto' }
    const[teamName,setteamName]=useState('')
    const[teamDescription,setteamDescription]=useState('')
    const[coachName,setcoachName]=useState('')
    const[coachNumber,setcoachNumber]=useState('')



    const handleClick=(e)=>{
        e.preventDefault()
        const team = {teamName,coachName,coachNumber,teamDescription}
        fetch("http://localhost:8080/v1/team/add",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin": "*","Access-Control-Allow-Headers": '*'},
            body:JSON.stringify(team)
        }).then(()=>{
                console.log("new team added")
            }
        )

        console.log(team)
    }
    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <h1>Ajouter/Modifier une equipe</h1>
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="standard-basic" label="Nom d'equipe" variant="standard" fullWidth
                               value={teamName}
                               onChange={(e)=>setteamName(e.target.value)}
                    />
                    <TextField id="standard-basic" label="Description" variant="standard" fullWidth
                               value={teamDescription}
                               onChange={(e)=>setteamDescription(e.target.value)}/>
                    <TextField id="standard-basic" label="Nom de l'entraineur" variant="standard" fullWidth
                               value={coachName}
                               onChange={(e)=>setcoachName(e.target.value)}/>
                    <TextField id="standard-basic" label="Numero de telephone" variant="standard" fullWidth
                               value={  coachNumber}
                               onChange={(e)=>setcoachNumber(e.target.value)}/>

                    <ButtonGroup>
                        <Button
                            variant="contained" color="primary" onClick={handleClick}>Ajouter</Button>
                        <Link to="/">
                            <Button variant="contained" color="secondary">Retour</Button>
                        </Link>
                    </ButtonGroup>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <h3>Mes joueurs</h3>
                    </Box>
                <IconButton aria-label="add player" color="error" >
                    <Link to={"/player/add"}>
                    <AddBoxIcon />
                    </Link>
                </IconButton>
            </Paper>
        </Container>
    );

}