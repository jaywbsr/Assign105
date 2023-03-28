import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Height } from '@mui/icons-material';
import { height } from '@mui/system';

function Rightbar() {
  return (
    <Box display="flex" flexDirection="column" sx = {{display: {xs:"none",md:"block"}, marginTop: 10}}>
        <Typography>
            Lastest Photos
        </Typography>
      <Box display="flex">   
        <ImageList cols={2} sx={{width: 250}}>
          <ImageListItem>
            <img src="https://i.huffpost.com/gen/3032066/thumbs/r-DOG-403xFB.jpg" alt="Image 1"/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://i.huffpost.com/gen/3032066/thumbs/r-DOG-403xFB.jpg" alt="Image 2"/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://i.huffpost.com/gen/3032066/thumbs/r-DOG-403xFB.jpg" alt="Image 3"/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://i.huffpost.com/gen/3032066/thumbs/r-DOG-403xFB.jpg" alt="Image 4"/>
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
}

export default Rightbar;