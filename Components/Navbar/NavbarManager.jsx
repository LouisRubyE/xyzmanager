import React from 'react';
import './NavbarManager.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

// eslint-disable-next-line react/prop-types
function Navbar({togglePage, pages}) {
  const userName = "John Doe"; // This will come from your backend
  const userRole = "Admin"; // This will come from your backend

  return (
    <div className='navbar-2'>
      <div className="wrapper">
        <div className="search">
          <SearchOutlinedIcon className="searchIcon" />
          <input type="text" placeholder='Search' />
        </div>
        <div>
          <div className="items">
            <div className="profile">
              <div className="name">{userName}</div>
              <div className="role">{userRole}</div>
            </div>
            <div className="item" onClick={() => togglePage(0,1)}>
              <img src="src/assets/pexels-lum3n-44775-406014.jpg" alt="" className='avatar' />
            </div>
            <div className="separator"></div>
            <div className="item">
              <NotificationsNoneOutlinedIcon style={{ color: 'rgba(4, 49, 91, 1)' }} />
              <div className="counter">1</div>
            </div>
            <button className="item" onClick = {() => togglePage(1,0)}>
              <SettingsOutlinedIcon style={{ color: 'rgba(4, 49, 91, 1)' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
