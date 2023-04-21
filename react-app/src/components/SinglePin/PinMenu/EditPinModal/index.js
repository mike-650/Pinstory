import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from "../../../../context/Modal"
import './EditPinModal.css'
import { thunkUpdatePin } from '../../../../store/pin';

function EditPinModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const singlePin = useSelector(state => state.pins.singlePin)
  const [title, setTitle] = useState(singlePin.title);
  const [description, setDescription] = useState(singlePin.description);
  const [errors, setErrors] = useState({});

  const { closeModal } = useModal();
  const handleUpdate = (e) => {
    e.preventDefault()
    const err = {};

    if (title.length >= 30) err.title = 'Pin Title must be less than 30 characters';
    if (description.length >= 120) err.description = 'Description must be less than 120 characters';

    if (Object.values(err).length) return setErrors(err);

    dispatch(thunkUpdatePin(singlePin.id, title, description))
    closeModal();
    return history.push(`/pin/${singlePin.id}`)
  }

  return (
    <div className='EP-Modal'>
      <h2>Edit this pin</h2>

      <form className='EP-form' onSubmit={(e) => handleUpdate(e)}>
        <div className='EP-title-sec'>
          <label>
            Title
            {errors.title && <p>{errors.title}</p>}
          </label>
          <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required></input>
        </div>
        <div className='EP-descrip-sec'>
          <label>
            Description
            {errors.description && <p>{errors.description}</p>}
          </label>
          <textarea className='EP-textarea' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className='EP-save-cancel-buttons'>
          <div className='EP-cancel-button' onClick={() => closeModal()}>
            Cancel
          </div>
          <button className='EP-update-button'>
            Update
          </button>
        </div>
      </form>

    </div>
  )
}

export default EditPinModal
