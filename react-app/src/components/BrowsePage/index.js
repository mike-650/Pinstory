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
      {allPins.map((pin)=>
      <div className="BR-images-box" key={pin.id}>
          <NavLink to={`/pin/${pin.id}`} className="BR-NavLink" key={pin.id}>
          <img src={pin.imageUrl} alt='test' className="BR-pin-images"></img>
          </NavLink>
      </div>
      )}
    </div>
  )
}

export default BrowsePage;
