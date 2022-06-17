import { Box, Grid, Paper } from '@mui/material';
import React from 'react'
import { Typography } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme ({
    components: {
        MuiTypography: {
            variants: [
                {
                    props:{
                        variant: "body2"
                    },
                    style:{
                        fontSize: 11,
                    },
                },
                {
                    props:{
                        variant: "body3"
                    },
                    style:{
                        fontSize: 9,
                    },
                },
            ],
        },
    },
});

const  ItemCard = ({item}) =>  {
  return(
        <Grid item xs={3}>

            <ThemeProvider theme={theme}>
             <Paper elevation={3} >
                <img 
                src={item.image}
                alt=''
                style={{height:150}}
                className = 'img'>

                </img>
                <Box paddingX={1}>
                    <Typography variant='subtitle1' component='h2'>
                        {item.name}
                    </Typography>
                
               
                    <Box>
                    <Typography variant='h6' component='h3' marginTop={0}>
                            {item.price}ALL
                    </Typography>
                    
                    </Box>
                </Box>
            </Paper>
            </ThemeProvider>
        </Grid>
       
  );
}

export default ItemCard ;