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
    <div className={menu} onClick={() => setMenu('hidden')}>
      <div>{user.username}</div>
      <div>{user.email}</div>
      <button onClick={() => handleLogout()}>Log Out</button>
    </div>
  )
}

export default ProfileMenu;
