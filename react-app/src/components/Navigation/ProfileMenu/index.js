import { useState, useRef, useEffect } from 'react';
import { logout } from '../../../store/session';

import './ProfileMenu.css'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

function ProfileMenu() {
  const [menu, setMenu] = useState('PM-drop-menu');
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenu('hidden')
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [dropdownRef])

  const handleLogout = async () => {
    dispatch(logout())
    return;
  }

  return (
    <div className={menu} ref={dropdownRef}>
      <div className='PM-menu-container'>
        <p style={{ fontSize: '12px' }}>Currently In</p>
        <NavLink to={'/profile'} className='PM-profile-section'>
          <img src={user.profilePicture || 'https://pinstorybucket.s3.us-west-1.amazonaws.com/default.png'} alt='Profile Picture' className='PM-profile-picture-in-menu'></img>
          <div className='PM-profile-info'>
            <div style={{fontSize:'14px', fontWeight:'bold'}}>{user.firstName} {user.lastName}</div>
            <div className='PM-username-check'>
            <div style={{fontSize:'11px', color:'rgb(97,97,97)'}}>{user.username}</div>
            <i class="fa-solid fa-check fa-sm"></i>
            </div>
            <div style={{fontSize:'10px', color:'rgb(97,97,97)'}}>{user.email}</div>
          </div>
        </NavLink>

        <div id='logout-button'>
          <button id='logout-actual-button'onClick={() => handleLogout()}>Log Out</button>
        </div>

      </div>
    </div>
  )
}

export default ProfileMenu;
