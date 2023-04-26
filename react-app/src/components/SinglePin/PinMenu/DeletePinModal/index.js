import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { thunkDeletePin } from '../../../../store/pin';
import { useModal } from "../../../../context/Modal"
import './DeletePinModal.css';

function DeletePinModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();
  const pinId = useSelector(state => state.pins.singlePin.id)
  const handleDelete = () => {
    dispatch(thunkDeletePin(pinId))
    closeModal();
    return history.push('/browse')
  }

  return (
    <div className='DP-Modal'>
      <h2>Are you sure?</h2>
      <p style={{fontSize:'14px'}}>Once you delete a pin, you can't undo it!</p>

      <div className='DP-cancel-delete-buttons'>
      <button id='DP-cancel-button' onClick={() => closeModal()}>Cancel</button>
      <button id='DP-delete-button' onClick={handleDelete}>Delete</button>
      </div>

    </div>
  )
}

export default DeletePinModal
