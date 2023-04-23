import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { thunkSinglePin } from '../../store/pin';

import './SinglePin.css'
import PinMenu from './PinMenu';
import ProfileMenu from './ProfileMenu';

function SinglePin() {
  const dispatch = useDispatch();
  const { pinId } = useParams();
  const [pinMenu, setPinMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  const pinDetails = useSelector(state => state.pins.singlePin)
  const userId = useSelector(state => state.session.user.id)

  useEffect(() => {
    dispatch(thunkSinglePin(pinId))
  }, [dispatch, pinId])

  const toggleMenu = () => {
    if (!pinMenu) return setPinMenu(true);
    else return setPinMenu(false);
  }

  const toggleProfileMenu = () => {
    if (!profileMenu) return setProfileMenu(true);
    else return setProfileMenu(false);
  }

  return (
    <div className="SP-container">
      <div className="SP-pin-container">
        <img src={pinDetails.imageUrl} alt='Test' />


        <div className='SP-pin-info'>
          <div className='SP-pin-top-section'>
            {pinDetails.user_id === userId ? <i className="fa-solid fa-ellipsis fa-xl" onClick={toggleMenu}></i> : <div></div>}
            {pinMenu ? <PinMenu /> : null}
            <div className='SP-top-right-section'>
              <div className='SP-profile-drop-menu-div' onClick={toggleProfileMenu}>Profile <i className="fa-solid fa-chevron-down fa-sm"></i></div>
              { profileMenu && <ProfileMenu />}
              <div className="NP-save-button SP-save-button">
                <button id='NP-save'>Save</button>
              </div>
            </div>
          </div>

          <h2>
            {pinDetails.title}
          </h2>
          <div>
            {pinDetails.description}
          </div>
        </div>


      </div>
    </div>
  )
}

export default SinglePin;
