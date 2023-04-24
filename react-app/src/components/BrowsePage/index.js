import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { thunkAllPins } from "../../store/pin";

import './BrowsePage.css'
import { useEffect } from "react";


function BrowsePage() {
  const dispatch = useDispatch();
  const allPins = Object.values(useSelector(state => state.pins.allPins))
  allPins.sort(() => Math.random() - 0.5);

  useEffect(() => {
    dispatch(thunkAllPins());
  }, [dispatch])

  return (
    <div className="BR-pins-container">
      {allPins.map((pin) =>
        <NavLink to={`/pin/${pin.id}`} id="BR-NavLink" key={pin.id}>
          <img id='BR-pin-images'src={pin.imageUrl} alt='test'></img>
        </NavLink>
      )}
    </div>
  )
}

export default BrowsePage;
