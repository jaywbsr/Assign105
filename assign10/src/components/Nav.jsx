// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import '../styles/Nav.css';

// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1}} >
//       <AppBar position="static">
//         <Toolbar className='Nav'>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             My Website
//           </Typography>
//           <Button color="inherit">HOME</Button>
//           <Button color="inherit">ABOUT</Button>
//           <Button color="inherit">CONTACT</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { display } from '@mui/system';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"#20232a"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
            My Website
          </Typography>
          <Box sx={{ display: { xs:"none", sm: "none", md:"block"}}}>
          <Button color="inherit">HOME</Button>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">CONTACT</Button>
          </Box>
          <Button color='inherit' sx={{display: { xs:"block", md:"none"}}}>
            <MenuIcon color="white"></MenuIcon>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}