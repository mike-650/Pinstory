import { useSelector } from "react-redux";
import './UserPins.css'


function Created() {
  const userId = useSelector(state => state.session.singleUser.id);
  const userPins = useSelector(state => Object.values(state.pins.allPins).filter(pin => pin.user_id == userId))

  return (
    <div className='UP-pins-container'>
      {userPins.map(pin =>
        <div key={pin.id}>
          <img className='BR-pin-images' src={pin.imageUrl} alt='Pin'></img>
        </div>
      )}
    </div>
  )
}


export default Created;
