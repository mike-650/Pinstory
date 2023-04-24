import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useModal } from "../../../../context/Modal"
import './EditBoardModal.css'
import { useState } from 'react';

function EditBoardModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState({});
  const boardId = useSelector(state => state.boards.singleBoard.id)
  const user = useSelector(state => state.session.user.username)

  const handleEdit = (e) => {
    e.preventDefault();


    // dispatch(thunkEditBoard(boardId))
    closeModal();
    return;
  }

  return (
    <div className='EB-Modal'>
      <div className='EB-header'>
        <h2>Edit your board</h2>
        <i class="fa-solid fa-xmark"></i>
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='BPM-title-input EB-text-area'
            >
          </textarea>
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
