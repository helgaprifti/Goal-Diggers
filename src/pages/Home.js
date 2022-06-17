import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';

import ItemCard from '../components/ItemCard';
import menu from '../data.json';

const Home = () =>(
    <div className="App">
    
    <Container sx={{marginY: 5}}>
      {menu.map((menuCat)=>(
        <div key={menuCat.id}>
        <Typography 
        variant = "h4"
        component='h2'
        marginTop={5}
        marginBottom={3}
        
        >
          {menuCat.name}

        </Typography>
        
        <Grid container spacing = {2}>
        {menuCat.items.map((item, index) => <ItemCard item = {item} key ={index}/>)}
      </Grid>
      </div>
      ))}

       
    </Container>
  </div>
)

export default Home;