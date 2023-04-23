import { NavLink, useParams } from 'react-router-dom'
import './SingleBoard.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { thunkSingleBoard } from '../../store/board';
import { grabUser } from '../../store/session';
import BoardOptionsModal from './BoardOptionsMenu';

function SingleBoard() {
  const { userName, boardId } = useParams();
  const dispatch = useDispatch();
  const [ showMenu, setShowMenu ] = useState(false);
  const board = useSelector(state => state.boards.singleBoard)
  const user = useSelector(state => state.session.singleUser)

  useEffect(() => {
    dispatch(thunkSingleBoard(boardId))
    dispatch(grabUser(userName))
  }, [dispatch])

  const editBoard = () => {
    if (!showMenu) setShowMenu(true);
    else setShowMenu(false);
  }

  return (
    <div>
      <div className='SB-title-ellipsis'>
          <h1>{board?.title}</h1>
      </div>
      <div className='SB-profile-picture-container'>
        <img className="PP-profile-picture" src={`${user?.profilePicture}`} alt='Profile Picture'></img>
      </div>
      <div className='SB-profile-user-name'>
        @{user?.username}
      </div>
      <div className='PP-board-description'>
        <p>{board.description}</p>
      </div>
      <div className='SP-pins-filter-container'>
        {board.pins?.length > 1 ? <h4>{board.pins?.length} pins</h4> : <h4>{board.pins?.length} pin</h4>}
        <i className="fa-solid fa-ellipsis fa-xl" onClick={() => editBoard()}></i>
      </div>
        { showMenu && <BoardOptionsModal />}
      <div className='SP-board-pins-container'>
        {board.pins?.map(pin =>
          <div key={pin.id}>
            <NavLink to={`/pin/${pin.id}`}>
            <img className='BR-pin-images' src={pin.imageUrl}></img>
            </NavLink>
            <h4>{pin.title}</h4>
          </div>
        )}
      </div>
    </div>
  )
}

export default SingleBoard
