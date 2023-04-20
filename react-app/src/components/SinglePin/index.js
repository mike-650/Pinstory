import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { thunkSinglePin } from '../../store/pin';

import './SinglePin.css'

function SinglePin() {
  const dispatch = useDispatch();
  const { pinId } = useParams();
  const pinDetails = useSelector(state => state.pins.singlePin)
  console.log(pinDetails)
  useEffect(() => {
    dispatch(thunkSinglePin(pinId))
  }, [dispatch])

  return (
    <div className="SP-container">
      <div className="SP-pin-container">
        <img src={pinDetails.imageUrl} alt='Test' />


        <div className='SP-pin-info'>
          <div className='SP-pin-top-section'>
            <i className="fa-solid fa-ellipsis fa-xl" ></i>
            <div className="NP-save-button">
              <button id='NP-save'>Save</button>
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
