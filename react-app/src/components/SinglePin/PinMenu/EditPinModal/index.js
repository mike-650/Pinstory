import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from "../../../../context/Modal"
import { thunkUpdatePin } from '../../../../store/pin';
import './EditPinModal.css'

function EditPinModal() {
  const dispatch = useDispatch();
  const singlePin = useSelector(state => state.pins.singlePin)
  const [title, setTitle] = useState(singlePin.title);
  const [description, setDescription] = useState(singlePin.description);
  const [errors, setErrors] = useState({});

  const { closeModal } = useModal();
  const handleUpdate = (e) => {
    e.preventDefault()
    const err = {};

    if (title.trim().length === 0) err.title = 'Please provide a title';
    if (title.length >= 30) err.title = 'Pin Title must be less than 30 characters';
    if (description.trim().length === 0) err.description = 'Please provide a description';
    if (description.length >= 120) err.description = 'Description must be less than 120 characters';

    if (Object.values(err).length) return setErrors(err);

    dispatch(thunkUpdatePin(singlePin.id, title, description))
    closeModal();
    return;
  }

  return (
    <div className='EP-Modal'>
      <h2>Edit this pin</h2>

      <form className='EP-form' onSubmit={(e) => handleUpdate(e)}>
        <div className='EP-title-sec'>
          <div className='EP-title-div'>
              {errors.title && <p style={{ fontSize: '12px', color: 'red', margin: '0'}}>{`* ${errors.title}`}</p>}
            <label>
              Title
            </label>
          </div>
          <input className='EP-title-input' type='text' value={title} onChange={(e) => setTitle(e.target.value)} required></input>
        </div>
        <div className='EP-descrip-sec'>
          <div className='EP-desc-div'>
              {errors.description && <p style={{ fontSize: '12px', color: 'red', margin: '0' }}>{`* ${errors.description}`}</p>}
            <label>
              Description
            </label>
          </div>
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
