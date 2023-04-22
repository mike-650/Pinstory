import { useSelector } from "react-redux";
import './UserPins.css'


function UserPins({ userId }) {
  const userPins = useSelector(state => Object.values(state.pins.allPins).filter(pin => pin.user_id == userId))

  return (
    <div className='UP-pins-container'>
      {userPins.map(pin =>
        <img className='BR-pin-images' src={pin.imageUrl} alt='Pin'></img>
      )}
    </div>
  )
}


export default UserPins;
