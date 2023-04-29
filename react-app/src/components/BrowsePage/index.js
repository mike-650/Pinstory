import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import { thunkAllPins, thunkSavedPins, thunkSavePin, thunkUnsavePin } from "../../store/pin";
import { thunkUserBoards } from "../../store/board";
import QuickProf from "./QuickProf";

import './BrowsePage.css'


function BrowsePage() {
  const dispatch = useDispatch();
  const [profileMenu, setProfileMenu] = useState(false);
  const [currId, setCurrId] = useState(null);
  const allPins = Object.values(useSelector(state => state.pins.allPins))
  const savedPins = Object.values(useSelector(state => state.pins.savedPins)).map(pin => pin.id)
  const userId = useSelector(state => state.session.user.id)

  useEffect(() => {
    dispatch(thunkAllPins());
    dispatch(thunkSavedPins());
    dispatch(thunkUserBoards(userId))
  }, [dispatch])

  const handleSave = (e, pinId) => {
    e.preventDefault();
    if (!savedPins.includes(pinId)) {
      dispatch(thunkSavePin(pinId));
      return;
    }
    else {
      dispatch(thunkUnsavePin(pinId));
      return;
    }
  }

  const openProf = (e, id) => {
    e.preventDefault();
    setCurrId(id)
    if (profileMenu) return setProfileMenu(false)
    setProfileMenu(true);
  }

  return (
    <div className="BR-TESTING">
      <div className="BR-pins-container">
        {allPins.map((pin) =>
          <div className="BR-img-container" key={pin.id} onMouseLeave={() => setProfileMenu(false)}>
            <NavLink to={`/pin/${pin.id}`} id="BR-NavLink" key={pin.id}>
              <div className="BR-img-overlay">
                <div className="BR-overlay-content">
                  <div className="BR-over-flex">
                    {savedPins.includes(pin.id) ?
                      <>
                        <div className="BR-saved-to-prof-div"><div>Saved to Profile </div></div>
                        <div className="BR-saved-div" onClick={(e) => handleSave(e, pin.id)}>Saved</div>
                      </>
                      :
                      <>
                        <div className="BR-profile-drop-down" onClick={(e) => openProf(e, pin.id)}>Profile <i className="fa-solid fa-chevron-down fa-sm"></i></div>
                        {profileMenu && pin.id === currId && <QuickProf pinId={pin.id}/>}
                        <div className="BR-save-div" onClick={(e) => handleSave(e, pin.id)}>Save</div>
                      </>
                    }

                  </div>
                </div>
              </div>
              <img id='BR-pin-images' src={pin.imageUrl} alt='test'></img>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default BrowsePage;
