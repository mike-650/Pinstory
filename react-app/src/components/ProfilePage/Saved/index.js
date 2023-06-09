import { useSelector } from "react-redux"
import { NavLink, useHistory } from "react-router-dom";
import './SavedPins.css'


function Saved({ userBoards, userId, username }) {
  const history = useHistory();
  const savedPins = useSelector(state => Object.values(state.pins.savedPins))

  return (
    <div className="SPB-boards-pins-container">
      <div>
        <NavLink to={`/profile/${username}/saved-pins`} className='SPB-grid-preview'>
          {savedPins.length ? savedPins.slice(0, 3)?.map(pin =>
            <img className='SPB-images' src={pin.imageUrl} alt={pin.title} key={pin.id}></img>
          ) : <>
            {/* Default image place holders */}
            <img className='SPB-images' src={'https://diabetescoalitionpbc.org/wp-content/uploads/2017/05/grey-box.png'} alt='default'></img>
            <img className='SPB-images' src={'https://diabetescoalitionpbc.org/wp-content/uploads/2017/05/grey-box.png'} alt='default'></img>
            <img className='SPB-images' src={'https://diabetescoalitionpbc.org/wp-content/uploads/2017/05/grey-box.png'} alt='default'></img>
          </>
          }
        </NavLink>
        <div className="SPB-title-total-pin-header">
          <h4>Saved Pins</h4>
          {savedPins.length === 1 ? <p>{savedPins.length} pin</p> : <p>{savedPins.length} pins</p>}
        </div>
      </div>
      {userBoards.map(board =>
        <div key={board.id}>
          <div className="SPB-grid-preview" onClick={() => history.push(`/profile/${username}/${board.id}`)}>
            {board.pins.length > 0 ? board.pins.slice(0, 3).map((pin, index) => (
              <img className='SPB-images' src={pin.imageUrl} alt={pin.title} key={index} />
            )) : <>
              {/* Default image place holders */}
              <img className='SPB-images' src={'https://diabetescoalitionpbc.org/wp-content/uploads/2017/05/grey-box.png'} alt='default'></img>
              <img className='SPB-images' src={'https://diabetescoalitionpbc.org/wp-content/uploads/2017/05/grey-box.png'} alt='default'></img>
              <img className='SPB-images' src={'https://diabetescoalitionpbc.org/wp-content/uploads/2017/05/grey-box.png'} alt='default'></img>
            </>}
          </div>
          <div className="SPB-title-total-pin-header">
            <h4>{board.title}</h4>
            {board.pins.length === 1 ? <p>{board.pins.length} pin</p> : <p>{board.pins.length} pins</p>}
          </div>
        </div>
      )}
    </div>
  )
}

export default Saved
