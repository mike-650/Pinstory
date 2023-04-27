import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { grabUser } from '../../store/session'
import { useState } from 'react'
import { thunkSavedPins } from '../../store/pin'
import { thunkUserBoards } from '../../store/board'
import BoardMenu from './BoardMenu'
import Created from './Created'
import Saved from './Saved'
import './ProfilePage.css'

function ProfilePage() {
  const { userName } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [createClass, setCreateClass] = useState('PP-create-class-default');
  const [savedClass, setSavedClass] = useState('PP-save-class-selected');
  const [createdPage, setCreatedPage] = useState(false);
  const [savedPage, setSavedPage] = useState(true);
  const [boardMenu, setBoardMenu] = useState(false);
  const currUser = useSelector(state => state.session.user);
  const user = useSelector(state => state.session.singleUser);
  const userBoards = useSelector(state => Object.values(state.boards.userBoards));
  const userId = useSelector(state => state.session.singleUser?.id);

  useEffect(() => {
    dispatch(thunkSavedPins());
    async function fetchData() {
      const res = await dispatch(grabUser(userName))
      if (res.errors) {
        return history.push('/not-found')
      } else {
        dispatch(thunkUserBoards(res.id))
      }
    }
    fetchData();
  }, [dispatch, userId, userName, history])

  const switchPage = () => {
    if (savedPage) {
      setSavedPage(false)
      setSavedClass('PP-save-class-default')
      setCreateClass('PP-create-class-selected')
      setCreatedPage(true)
    } else {
      setCreatedPage(false)
      setCreateClass('PP-create-class-default')
      setSavedClass('PP-save-class-selected')
      setSavedPage(true)
    }
  }

  const toggleBoardMenu = () => {
    if (!boardMenu) return setBoardMenu(true)
    else setBoardMenu(false)
  }

  if ( !user || !userId) {
    return (
      <h1>Loading..</h1>
    )
  }

  return (
    <div>
      <div className="PP-Top-Section">
        <img className='PP-profile-picture' src={user?.profilePicture || 'https://e7.pngegg.com/pngimages/297/378/png-clipart-cartoon-character-illustration-maplestory-2-maplestory-adventures-video-game-boss-slime-game-leaf.png'} alt='Profile' />
        <h1>{user?.firstName} {user?.lastName}</h1>
        <p>@{user?.username}</p>
        {/* Conditionally render Edit Profile button if logged user is on their own prof page */}
        {currUser?.id === user?.id && <button onClick={() => alert('Under Construction!')}>Edit Profile</button>}
        <div className='PP-created-saved'>
          <h4 className={createClass} onClick={switchPage}>Created</h4>
          <h4 className={savedClass} onClick={switchPage}>Saved</h4>
        </div>
        {!createdPage &&
          <div className='PP-filter-add-container'>
            <span className="material-symbols-outlined PP-icons" onClick={() => alert('Feature coming soon!')}>tune</span>
            <span className="material-symbols-outlined PP-icons" onClick={toggleBoardMenu}>add</span>
            {boardMenu && <BoardMenu />}
          </div>
        }
        {createdPage && <Created />}
        {savedPage && <Saved userBoards={userBoards} userId={userBoards} username={user?.username} />}
      </div>
    </div>
  )
}


export default ProfilePage
