import { useState } from 'react'
import { useModal } from '../../../../context/Modal';
import './BoardPinModal.css'
import { useDispatch, useSelector } from 'react-redux';
import { thunkCreateBoard, thunkUserBoards } from '../../../../store/board';
import { useHistory } from 'react-router-dom';

function BoardPinModal() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const userId = useSelector(state => state.session.user.id)

  const handleSubmit = async(e) => {
    e.preventDefault();
    let err = {};
    if (title.length <= 0) err.title = "Don't forget to name your board!";
    if (title.length > 21) err.title = "Title must be less than 20 characters";

    if (err.title) return setErrors(err)

    const formData = new FormData();

    formData.append('title', title);

    dispatch(thunkCreateBoard(formData, userId));
    closeModal();
    return;
  }

  return (
    <div>
      <div className='BPM-Header'>
        <h2>Create Board</h2>
      </div>
      <div className='BPM-form'>
        <form onSubmit={handleSubmit}>
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
          { errors.title && <p style={{color:'red', fontSize:'12px'}}>{errors.title}</p>}
          <div className='BPM-secret-field'>
            <input
              type='checkbox'
              onClick={() => alert('Feature Coming Soon!')}
              >
            </input>
            <h4>Keep this board secret</h4>
          </div>
          <div className='BPM-create-container'>
          <button className='BPM-create-btn'>Create</button>
          </div>
        </form>
      </div>
    </div>
  )

}


export default BoardPinModal
