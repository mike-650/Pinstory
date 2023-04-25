import { NavLink, useHistory, useParams } from 'react-router-dom'
import './SingleBoard.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { thunkSingleBoard } from '../../store/board';
import { grabUser } from '../../store/session';
import BoardOptionsModal from './BoardOptionsMenu';
import RemovePinModal from './RemovePinModal';

function SingleBoard() {
  const { userName, boardId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const [removePinMenu, setRemovePinMenu] = useState(false);
  const [showEllipsis, setShowEllipsis] = useState(false);
  const [ellipsisId, setEllipsisId] = useState(null);
  const [pinId, setPinId] = useState(null);
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

  const handleEllipsis = (pinId) => {
    setEllipsisId(pinId)
    if (!showEllipsis) return setShowEllipsis(true);
    else return setShowEllipsis(false);
  }

  const togglePinMenu = (e, pinId) => {
    e.preventDefault();
    setPinId(pinId);
    if (!removePinMenu) return setRemovePinMenu(true);
    else return setRemovePinMenu(false);
  }

  return (
    <div>
      <div className='SB-title-ellipsis'>
        <h1>{board?.title}</h1>
      </div>
      <div className='SB-profile-picture-container'>
        <img className="PP-profile-picture" src={user?.profilePicture || 'https://e7.pngegg.com/pngimages/297/378/png-clipart-cartoon-character-illustration-maplestory-2-maplestory-adventures-video-game-boss-slime-game-leaf.png'} alt='Profile Picture'></img>
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
      {showMenu && <BoardOptionsModal />}
      {removePinMenu && <RemovePinModal pinId={pinId} boardId={board.id}/>}
      <div className='SP-board-pins-container'>
        {board.pins?.map(pin =>
          <div className='SP-board-container' key={pin.id}>
            <NavLink className='SB-board-images' to={`/pin/${pin.id}`} onMouseLeave={() => handleEllipsis(null)}>
              {pin.id == ellipsisId && <i className="fa-solid fa-ellipsis fa-xl SB-ellipsis" onClick={(e) => togglePinMenu(e, pin.id)}></i>}
              <img className='BR-pin-images' src={pin.imageUrl} onMouseEnter={() => handleEllipsis(pin.id)}></img>
            </NavLink>
            <h4>{pin.title}</h4>
          </div>
        )}
      </div>
    </div>
   )
}

export default SingleBoard
