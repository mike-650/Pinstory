import { useState } from 'react';
import { logout } from '../../../store/session';

import './ProfileMenu.css'
import { useSelector, useDispatch } from 'react-redux';

function ProfileMenu() {
  const [menu, setMenu] = useState('PM-drop-menu');
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)

  const handleLogout = async () => {
    dispatch(logout())
    return;
  }

  return (
    <div className={menu} >
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
