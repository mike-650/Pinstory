import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { thunkAllPins, thunkSavedPins } from "../../store/pin";

import './BrowsePage.css'
import { useEffect } from "react";
import { thunkSavePin } from "../../store/pin";
import { thunkUnsavePin } from "../../store/pin";


function BrowsePage() {
  const dispatch = useDispatch();
  const allPins = Object.values(useSelector(state => state.pins.allPins))
  const savedPins = Object.values(useSelector(state => state.pins.savedPins)).map(pin => pin.id)
  // allPins.sort(() => Math.random() - 0.5);

  useEffect(() => {
    dispatch(thunkAllPins());
    dispatch(thunkSavedPins());;
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

return (
  <div className="BR-TESTING">
  <div className="BR-pins-container">
    {allPins.map((pin) =>
      <div className="BR-img-container" key={pin.id}>
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
                    <div className="BR-profile-drop-down" onClick={(e) => {e.preventDefault(); alert('Under Construction')}}>Profile <i className="fa-solid fa-chevron-down fa-sm"></i></div>
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
