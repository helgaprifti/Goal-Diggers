import { Typography, Box } from "@mui/material";
import { Container } from "@mui/system";
import ImageCollage from "../components/ImageCollage";


const AboutUs = () => <Container sx = {{width:900}}>
    <Typography variant = 'h3' component="h1" marginTop={3}>
        Learn about us
    </Typography>
    <Box marginTop={3} sx={{display: 'flex'}}>
        <img src="https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801__340.jpg" alt="" 
        height={300}/>
        <ImageCollage/>
    </Box>
    <Box>
        <Typography variant = 'h6' component = 'h4' marginTop={3}>
            About Our Restaurant
        </Typography>
        <Typography variant = 'paragraph' component = 'p' marginTop={3}>
        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          
        </Typography>

        {/* <Typography variant = 'h6' component = 'h4' marginTop={3}>
            Frequently asked questions
        </Typography> */}
        {/* <CustomizedAccordions/> */}
    </Box>
</Container>

export default AboutUs;
