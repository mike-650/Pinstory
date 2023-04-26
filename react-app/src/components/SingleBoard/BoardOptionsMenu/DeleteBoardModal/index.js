import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useModal } from "../../../../context/Modal"
import { thunkDeleteBoard } from '../../../../store/board'
import './DeleteBoardModal.css'

function DeleteBoardModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();
  const boardId = useSelector(state => state.boards.singleBoard.id)
  const user = useSelector(state => state.session.user.username)

  const handleDelete = () => {
    dispatch(thunkDeleteBoard(boardId))
    closeModal();
    return history.push(`/profile/${user}`)
  }

  return (
    <div className='DB-Modal'>
      <h2>Are you sure?</h2>
      <p style={{fontSize:'14px'}}>Once you delete a board, you can't undo it!</p>

      <div className='DP-cancel-delete-buttons'>
      <button id='DP-cancel-button' onClick={() => closeModal()}>Cancel</button>
      <button id='DP-delete-button' onClick={handleDelete}>Delete</button>
      </div>

    </div>
  )
}

export default DeleteBoardModal
