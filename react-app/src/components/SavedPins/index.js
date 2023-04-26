import { useEffect } from 'react';
import './SavedPins.css'
import { thunkSavedPins } from '../../store/pin';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function SavedPins() {
  const dispatch = useDispatch();
  const pins = useSelector(state => Object.values(state.pins.savedPins))

  useEffect(() => {
    dispatch(thunkSavedPins())
  }, [dispatch])


  return (
    <>
      <div className="SavedPins-header">
        <h2>Saved Pins</h2>
      </div>
      <div className="SavedPins-container">
        {pins.map(pin =>
          <div className="SavedPin-div" key={pin.id}>
            <div className='SavedPin-content'>
              <NavLink to={`/pin/${pin.id}`}>
              <img className='SavedPin-image' src={pin.imageUrl} alt={pin.title}></img>
              </NavLink>
              <span>{pin.title}</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default SavedPins;
