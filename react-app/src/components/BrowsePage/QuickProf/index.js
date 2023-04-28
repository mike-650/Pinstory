import { useSelector } from 'react-redux'
import './QuickProf.css'

function QuickProf() {
  const userBoards = useSelector(state => Object.values(state.boards.userBoards))
  return (
    <div className='QP-container'>
      <div className='QP-content'>
        <h4>Save</h4>
      </div>
      <div className='QP-board-container'>
        <h5>All Boards</h5>
        <ul>
        {userBoards.map(board =>
        <li>
          <div className='QP-board'>
            <img className='QP-images' src={board.pins[0]?.imageUrl || 'https://diabetescoalitionpbc.org/wp-content/uploads/2017/05/grey-box.png'} alt='test'></img>
            <p>{board.title.length > 14 ? board.title.substr(0, 14 - 1) + "…" : board.title}</p>
          </div>
        </li>
        )}
        </ul>
      </div>
    </div>
  )
}


export default QuickProf
