import React from 'react'
import './sideNavbar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import TagIcon from '@mui/icons-material/Tag';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button'

import SidebarOptions from './SidebarOptions';

import TweetDialogue from './TweetDialogue'


export default function SideNavbar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='sidebar'>
      <div>
        
      <TwitterIcon 
          className='sidebar_twitterIcon'
        />
        

        <SidebarOptions 
          Icon={HomeIcon}
          text = "Home"
        />
        <SidebarOptions 
          Icon={TagIcon}
          text = "Explore"
        />
        <SidebarOptions 
          Icon={NotificationsIcon}
          text = "Notifications"
        />
        <SidebarOptions 
          Icon={MailIcon}
          text = "Message"
        />
        <SidebarOptions 
          Icon={BookmarkBorderIcon}
          text = "Bookmarks"
        />
        <SidebarOptions 
          Icon={ContactEmergencyIcon}
          text = "Twitter Blue"
        />
        <SidebarOptions 
          Icon={PermIdentityIcon}
          text = "Profile"
        />
        <SidebarOptions 
          Icon={MoreHorizIcon}
          text = "More"
        />


      {/* <button>Tweet</button> */}
      <Button className='sidebar_tweet' variant="outlined" onClick={handleClickOpen}>Tweet</Button>
      {
        open ? <TweetDialogue  open = {open} handleClose={handleClose}/> : ""
      }
    </div>

    </div>
  )
}

