import { useState, useRef, useEffect } from 'react';
import { logout } from '../../../store/session';

import './ProfileMenu.css'
import { useSelector, useDispatch } from 'react-redux';

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
        <div className='PM-profile-section'>
          <i className="fa-regular fa-circle-user fa-2xl PM-profile-icon"></i>
          <div className='PM-profile-info'>
            <div>{user.username}</div>
            <div>{user.email}</div>
          </div>
        </div>

        <div id='logout-button'>
        <button onClick={() => handleLogout()}>Log Out</button>
        </div>

      </div>
    </div>
  )
}

export default ProfileMenu;
