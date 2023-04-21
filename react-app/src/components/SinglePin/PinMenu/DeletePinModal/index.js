import { useParams, useHistory } from 'react-router-dom'
import './DeletePinModal.css'
import { useDispatch, useSelector } from 'react-redux';
import { thunkDeletePin } from '../../../../store/pin';
import { useModal } from "../../../../context/Modal"

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
      <h4>Once you delete a pin, you can't undo it!</h4>

      <div>Cancel</div>
      <div onClick={handleDelete}>Delete Forever</div>

    </div>
  )
}

export default DeletePinModal
