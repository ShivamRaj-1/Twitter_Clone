import * as React from 'react';
import './tweetOptions.css'

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';


import PublicIcon from '@mui/icons-material/Public';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


import { userDetails } from '../../../atoms/userDetails';
import { useRecoilValue } from 'recoil';


export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);



  const atomUserDetails = useRecoilValue(userDetails)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(atomUserDetails);

  return (
    <React.Fragment>
      <Box >
        
        <Tooltip className='userLogout_tooltip' >
          <IconButton
            onClick={handleClick}

            // sx={{display: 'flex', alignItems: 'center'}}
          >
            <Avatar  sx={{ width: 22, height: 22, backgroundColor: '#1da1f2' }}>
            <PublicIcon/>
            </Avatar>
            <Typography sx={{ minWidth: 100, color: 'black' }}>
            <p> Everyone can reply</p>
              </Typography>
        
          </IconButton>
          
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        
        <Divider />
        <MenuItem onClick={()=>{
          alert('Already Everyone selected')
        }}>
          <p><span><PublicIcon/></span> EveryOne</p>
          
        </MenuItem>
        
        <MenuItem >
          <p><span><PeopleAltIcon/> Only people you follow</span></p>
      
        
        </MenuItem>
        
      </Menu>
    </React.Fragment>
  );
}