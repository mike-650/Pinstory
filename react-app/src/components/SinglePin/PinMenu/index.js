import OpenModalButton from "../../OpenModalButton"
import DeletePinModal from "./DeletePinModal"
import './PinMenu.css'

function PinMenu() {

  return (
    <div className="SinglePM-container">
      <div className="SinglePM-edit-button">Edit Pin</div>
        <OpenModalButton
          buttonText="Delete Pin"
          // onItemClick={closeMenu}
          modalComponent={<DeletePinModal />}
          className={'DP-modal-button'}
        />
    </div>

  )
}

export default PinMenu
