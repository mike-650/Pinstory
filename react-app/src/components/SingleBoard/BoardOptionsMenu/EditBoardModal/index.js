import { useDispatch, useSelector } from 'react-redux'
import { useModal } from "../../../../context/Modal"
import { useState } from 'react';
import { thunkEditBoard } from '../../../../store/board';

import './EditBoardModal.css'


function EditBoardModal() {
  const dispatch = useDispatch();
  const board = useSelector(state => state.boards.singleBoard);
  const { closeModal } = useModal();
  const [title, setTitle] = useState('' || board.title);
  const [description, setDescription] = useState('' || board.description);
  const [errors, setErrors] = useState({});

  const handleEdit = (e) => {
    e.preventDefault();
    let err = {};

    if (title.trim().length <= 0) err.title = "Don't forget to name your board!";
    if (title.length > 21) err.title = "Title must be less than 20 characters";
    if (description.length >= 120) err.description = 'Description must be less than 120 characters';

    if (Object.values(err).length) return setErrors(err);

    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);

    dispatch(thunkEditBoard(board.id, formData));
    closeModal();
    return;
  }

  return (
    <div className='EB-Modal'>
      <div className='EB-header'>
        <h2>Edit your board</h2>
        <i className="fa-solid fa-xmark" onClick={() => closeModal()}></i>
      </div>
      <div className='EB-form'>
        <form onSubmit={(e) => handleEdit(e)}>
          <div>
            <h5 className='BPM-title-header'> Name </h5>
          </div>
          <input
            type='text'
            placeholder='Like "Places to Go" or "Recipes to Make"'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='BPM-title-input'
          >
          </input>
          {errors.title && <p style={{ color: 'red', fontSize: '12px' }}>{errors.title}</p>}
          <div style={{marginTop:'12px'}}>
            <h5 className='BPM-title-header'> Description </h5>
          <textarea
            type='text'
            placeholder="What's your board about?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='BPM-title-input EB-text-area'
            >
          </textarea>
          {errors.description && <p style={{ color: 'red', fontSize: '12px' }}>{errors.description}</p>}
            </div>
          <div className='BPM-secret-field'>
            <input
              type='checkbox'
              onClick={() => alert('Feature Coming Soon!')}
            >
            </input>
            <h4>Keep this board secret</h4>
          </div>
          <div className='BPM-create-container'>
            <button className='BPM-create-btn'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditBoardModal
