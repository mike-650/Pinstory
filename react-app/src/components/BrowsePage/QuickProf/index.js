import { useDispatch, useSelector } from 'react-redux'
import './QuickProf.css'
import { thunkAddPinToBoard } from '../../../store/board';

function QuickProf({pinId}) {
  const dispatch = useDispatch();
  const userBoards = useSelector(state => state.boards.userBoards)
  const userId = useSelector(state => state.session.user.id)

  const addToBoard = (e, boardId) => {
    e.preventDefault();
    dispatch(thunkAddPinToBoard(boardId, pinId, userId))
    return;
  }

  return (
    <div className='QP-container'>
      <div className='QP-content'>
        <h4>Save</h4>
      </div>
      <div className='QP-board-container'>
        <h5>All Boards</h5>
        <ul >
          {Object.values(userBoards).map(board =>
            <li key={board.id}>
              <div className='QP-board'>
                <img className='QP-images' src={board.pins[0]?.imageUrl || 'https://diabetescoalitionpbc.org/wp-content/uploads/2017/05/grey-box.png'} alt='test'></img>
                <p>{board.title.length > 14 ? board.title.substr(0, 14 - 1) + "…" : board.title}</p>
                {!board.pins.map(pin => pin.id).includes(pinId) ?
                  <button className='QP-save-button' onClick={(e) => addToBoard(e, board.id)}>Save</button>
                  :
                  <button className='QP-saved-button'>Saved</button>
                }
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}


export default QuickProf
