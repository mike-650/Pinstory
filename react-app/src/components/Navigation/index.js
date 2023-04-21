import { NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react';

import CreatePinMenu from './CreatePinMenu';
import logo from '../../images/pinstory-icon.png'
import './Navigation.css'
import ProfileMenu from './ProfileMenu';
import { useSelector } from 'react-redux';

function Navigation() {
  const [createMenu, setCreateMenu] = useState(false)
  const [profileMenu, setProfileMenu] = useState(false)
  const user = useSelector(state => state.session.user)

  const openCreateMenu = () => {
    if (!createMenu) return setCreateMenu(true)
    else return setCreateMenu(false)
  }

  const openProfileMenu = () => {
    if (!profileMenu) return setProfileMenu(true)
    else return setProfileMenu(false)
  }

  return (
    <div className='NV-container'>
      <div className='NV-left-section'>
        <NavLink to={'/browse'} className='NV-home-link'>
        <img src={logo} alt='Pinstory Logo' className='NV-pinstory-logo'/>
        <span >Home</span>
        </NavLink>
        <div className='NV-create-pin-container'>
          <p className='NV-createpin-icon' onClick={openCreateMenu}>Create <i className="fa-solid fa-chevron-down"></i></p>
          {createMenu && <CreatePinMenu />}
        </div>
      </div>
      <form className='NV-search-bar-container' onSubmit={() => alert('Feature Coming Soon!')}>
        <i className="fa-solid fa-magnifying-glass fa-sm" id='NV-search-icon'></i>
        <input type='search' placeholder='Search' id='NV-search-bar' />
      </form>
      <div className='NV-profile-section'>
        {/* <i className="fa-regular fa-circle-user" onClick={openProfileMenu}></i> */}
        <img onClick={openProfileMenu} src={user?.profilePicture || 'https://pinstorybucket.s3.us-west-1.amazonaws.com/default.png'} alt='Profile Picture' className='PM-profile-picture'></img>

        { profileMenu ? <ProfileMenu /> : null}
      </div>
    </div>
  )
}

export default Navigation;
