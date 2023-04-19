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
      {allPins.map(pin =>
        <>
          <NavLink to={`/pin/${pin.id}`} className="BR-NavLink">
          <img src={pin.imageUrl} alt='test' key={pin.id} className="BR-pin-images"></img>
          </NavLink>
        </>
      )}
    </div>
  )
}

export default BrowsePage;
