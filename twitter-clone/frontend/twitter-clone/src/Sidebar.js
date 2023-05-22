import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>
      {/* Twitter icon */}
      <TwitterIcon className='sidebar__twitterIcon'/>
      <SidebarOption title="Home" Icons={HomeIcon} active={true}/>
      <SidebarOption title="Explore" Icons={SearchIcon} />
      <SidebarOption title="Notifications" Icons={NotificationsNoneIcon} />
      <SidebarOption title="Messages" Icons={MailOutlineIcon} />
      <SidebarOption title="Bookmarks" Icons={BookmarkBorderIcon} />
      <SidebarOption title="Lists" Icons={ListAltIcon} />
      <SidebarOption title="Profile" Icons={PermIdentityIcon} />
      <SidebarOption title="More" Icons={MoreHorizIcon} />
      <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;
