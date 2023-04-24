import { useDispatch, useSelector } from 'react-redux';
import './ProfileMenu.css';
import { useEffect, useState } from 'react';
import { thunkAddPinToBoard, thunkUserBoards } from '../../../store/board';
import { useParams } from 'react-router-dom';

function ProfileMenu() {
  const dispatch = useDispatch();
  const { pinId } = useParams();
  const [ saveBtn, setSaveBtn ] = useState(false);
  const [ saveId, setSaveId] = useState(null);
  const [ menu, setMenu] = useState('ProfMenu-drop-down');
  const boards = useSelector(state => Object.values(state.boards?.userBoards));
  const userId = useSelector(state => state.session.user?.id);

  useEffect(() => {
    dispatch(thunkUserBoards(userId))
  }, [dispatch])

  const toggleSave = (boardId) => {
    setSaveId(boardId)
    if (!saveBtn) return setSaveBtn(true);
    else return setSaveBtn(true);
  }

  const saveToBoard = (boardId) => {
    dispatch(thunkAddPinToBoard(boardId, pinId))
    return setMenu('hidden');
  }

  return (
    <div className={menu}>
      <div className='ProfMenu-top-sec'>
        <h4>Save</h4>
      </div>
      <div className='ProfMenu-board-list'>
        <p>All Boards</p>
        <ul>
          {boards.map(board =>
          <div className='ProfMenu-board-container'>
            <li
            onMouseEnter={() => toggleSave(board.id)}
            onMouseLeave={() => setSaveBtn(false)}
            key={board.id}
            >
              <img src={board.pins[0]?.imageUrl ? board.pins[0].imageUrl : 'https://diabetescoalitionpbc.org/wp-content/uploads/2017/05/grey-box.png'} alt='Board Picture'></img>
              <p style={{marginLeft:'6px'}}>{board.title.length > 14 ? board.title.substr(0, 14 - 1) + "…" : board.title}</p>
              { saveBtn && (saveId === board.id) && <div className='ProfMenu-save-button' onClick={() =>saveToBoard(board.id)}>Save</div>}
            </li>
          </div>
            )}
        </ul>
      </div>
    </div>
  )
}

export default ProfileMenu
