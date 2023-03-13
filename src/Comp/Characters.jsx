import { Box, Grid } from "@mui/material";
import { fetchData } from '../Service/Api';
import { useEffect, useState } from "react";
import Character from '../Comp/Character';
// import {Grid,Box} from '@mui/material';

 const Characters= ({ text }) => {

       const[ characters, setCharacters ] = useState([]);

    useEffect(() =>{
        getData();
    },[]);

    const getData =  async() => {
      let response = await fetchData(text);
    setCharacters(response.data);
    }
    return(
        <Box style={{margin: 20}}>
        <Grid container spacing={4}>
        {
            characters.map(character => (
             <Grid item xs={3}>
               <Character  character = { character } />
            </Grid>
            ))
        }
        </Grid>
        </Box>
    )
 }

 export default Characters;