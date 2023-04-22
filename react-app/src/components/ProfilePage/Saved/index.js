import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { thunkUserBoards } from "../../../store/board";
import './SavedPins.css'

function Saved({ userBoards, userId, username }) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkUserBoards(userId))
  }, [dispatch])


  return (
    <div className="SPB-boards-pins-container">
      {userBoards.map(board =>
        <div key={board.id}>
          <div className="SPB-grid-preview" onClick={() => history.push(`/profile/${username}/${board.id}`)}>
            {board.pins.slice(0, 3).map((pin, index) => (
              <img className='SPB-images' src={pin.imageUrl} alt={pin.title} key={index} />
            ))}
          </div>
          <h4>{board.title}</h4>
          {board.pins.length > 1 ? <p>{board.pins.length} pins</p> : <p>{board.pins.length} pin</p>}
        </div>
      )}
    </div>

  )
}

export default Saved
