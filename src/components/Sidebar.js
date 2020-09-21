//
//

import React from 'react';
// import SidebarOption from './SidebarOption';

import '../styles/Sidebar.scss';
import SidebarOption from './SidebarOption';
import {
  BookmarkBorder,
  Home,
  ListAlt,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  Search,
  Twitter,
} from '@material-ui/icons';
import { Button } from '@material-ui/core';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Twitter className='sidebar__twitterIcon' />
      <SidebarOption text='Home' Icon={Home} active />
      <SidebarOption text='Explore' Icon={Search} />
      <SidebarOption text='Notifications' Icon={NotificationsNone} />
      <SidebarOption text='Messages' Icon={BookmarkBorder} />
      <SidebarOption text='Bookmarks' Icon={ListAlt} />
      <SidebarOption text='Lists' Icon={PermIdentity} />
      <SidebarOption text='Profile' Icon={MoreHoriz} />

      <Button variant='outlined' className='sidebar__tweet' fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
