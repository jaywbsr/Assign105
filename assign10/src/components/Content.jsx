import { CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Card } from '@mui/material';
import { Grid } from '@mui/material';
import { CardActionArea } from "@mui/material";
import { Box as MuiBox } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


export const Content = () => {
  return (
    <>
    <MuiBox sx={{marginTop: 9}}>
                <Typography variant="h4" component="h1" color="initial">
                    Welcome to My Website
                </Typography>
                <MuiBox mt={2}>
                    <Typography variant="body1" color="initial" mb={2}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis qui dolorem quibusdam. Voluptas sed
                        officia quisquam quasi, porro eos. Quae consequatur
                        accusamus facilis ratione obcaecati ab ad ea pariatur
                        aspernatur?
                    </Typography>
                </MuiBox>
            </MuiBox>
    <Grid container spacing={2} mt={2}>
    <Grid item md={6} xs={12} >
        <Card >
            <CardMedia sx={{height : "140px"}} image="https://picsum.photos/300/200"></CardMedia>            
            <Typography gutterBottom variant='h5' component='div'> Card Title</Typography>
            <Typography variant='body2' color="text.secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet libero ac magna elementum rutrum. Morbi tellus ligula, porttitor in pulvinar ac, bibendum sed ligula. Pellentesque blandit metus vel</Typography>
        </Card>
        </Grid>
    <Grid item md={6}  sm={6} xs={12} >
    <Card >
            <CardMedia sx={{height : "140px"}} image="https://picsum.photos/300/200"></CardMedia>            
            <Typography gutterBottom variant='h5' component='div'> Card Title</Typography>
            <Typography variant='body2' color="text.secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet libero ac magna elementum rutrum. Morbi tellus ligula, porttitor in pulvinar ac, bibendum sed ligula. Pellentesque blandit metus vel</Typography>
        </Card>
    </Grid>
    <Grid item md={6}  sm={6} xs={12} >
            <Card >
            <CardMedia sx={{height : "140px"}} image="https://picsum.photos/300/200"></CardMedia>            
            <Typography gutterBottom variant='h5' component='div'> Card Title</Typography>
            <Typography variant='body2' color="text.secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet libero ac magna elementum rutrum. Morbi tellus ligula, porttitor in pulvinar ac, bibendum sed ligula. Pellentesque blandit metus vel</Typography>
        </Card>
        </Grid>
    </Grid>
    </>

    
  )
}

export default Content;

