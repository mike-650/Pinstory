import { useParams, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useModal } from "../../../../context/Modal"

function DeleteBoardModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();
  const { boardId } = useParams();

  const handleDelete = () => {
    // dispatch(thunkDeleteBoard(boardId))
    closeModal();
    return history.push('/browse')
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
