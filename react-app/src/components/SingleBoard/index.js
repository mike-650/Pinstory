import { useParams } from 'react-router-dom'
import './SingleBoard.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { thunkSingleBoard } from '../../store/board';
import { grabUser } from '../../store/session';

function SingleBoard() {
  const { userName, boardId } = useParams();
  const dispatch = useDispatch();
  const board = useSelector(state => state.boards.singleBoard)
  const user = useSelector(state => state.session.singleUser)

  useEffect(() => {
    dispatch(thunkSingleBoard(boardId))
    dispatch(grabUser(userName))
  }, [dispatch])

  return (
    <div>
      <div className='SB-title-ellipsis'>
        <h1>{board?.title}</h1>
        <i className="fa-solid fa-ellipsis fa-xl"></i>
      </div>
      <div className='SB-profile-picture-container'>
        <img className="PP-profile-picture" src={`${user?.profilePicture}`} alt='Profile Picture'></img>
      </div>
      <div className='SP-pins-filter-container'>
        {board.pins?.length > 1 ? <h4>{board.pins?.length} pins</h4> : <h4>{board.pins?.length} pin</h4>}
        <span className="material-symbols-outlined PP-icons" onClick={() => alert('Feature coming soon!')}>tune</span>
      </div>
      <div className='SP-board-pins-container'>
        {board.pins?.map(pin =>
          <div key={pin.id}>
            <img className='BR-pin-images' src={pin.imageUrl}></img>
            <h4>{pin.title}</h4>
          </div>
        )}
      </div>
    </div>
  )
}

export default SingleBoard
