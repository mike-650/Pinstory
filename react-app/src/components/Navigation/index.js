import { NavLink } from 'react-router-dom';
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

    const LinkedInLink = (e) => {
      e.preventDefault();
      window.open('https://www.linkedin.com/in/michael-s-688653118/', '_blank');
    };

    const GithubLink = (e) => {
      e.preventDefault();
      window.open('https://github.com/mike-650', '_blank');
    };

  return (
    <div className='NV-container'>
      <div className='NV-left-section'>
        <NavLink to={'/browse'} className='NV-home-link'>
          <img src={logo} alt='Pinstory Logo' className='NV-pinstory-logo' />
          <span className='NV-Home-button'>Home</span>
        </NavLink>
        <div className='NV-create-pin-container'>
          <div className='NV-createpin-icon'>
            <p className='NV-create-link' style={{marginRight:'5px'}} onClick={openCreateMenu}>Create</p> <i onClick={openCreateMenu} className="fa-solid fa-chevron-down NV-create-link"></i>
          </div>
          {createMenu && <CreatePinMenu />}
        </div>
      </div>
      <form className='NV-search-bar-container' onSubmit={() => alert('Feature Coming Soon!')}>
        <i className="fa-solid fa-magnifying-glass fa-sm" id='NV-search-icon'></i>
        <input type='search' placeholder='Feature Coming Soon!' id='NV-search-bar' />
      </form>
      <div className='NV-profile-section'>
        <i className="fa-brands fa-github fa-xl mike-socials" onClick={(e) => GithubLink(e)}></i>
        <i className="fa-brands fa-linkedin fa-xl mike-socials" onClick={(e) => LinkedInLink(e)}></i>
        <img onClick={openProfileMenu} src={user?.profilePicture || 'https://ih1.redbubble.net/image.1790122233.3876/flat,750x1000,075,f.jpg'} alt='Profile' className='PM-profile-picture'></img>
        {profileMenu ? <ProfileMenu /> : null}
      </div>
    </div>
  )
}

export default Navigation;
