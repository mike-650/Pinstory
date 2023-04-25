import { useEffect } from 'react';
import './SavedPins.css'
import { thunkSavedPins } from '../../store/pin';
import { useDispatch, useSelector } from 'react-redux';

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
          <div className="SavedPin-div">
            <img src={pin.imageUrl} alt={pin.title}></img>
            <p>{pin.title}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default SavedPins;
