import OpenModalButton from "../../OpenModalButton"
import DeletePinModal from "./DeletePinModal"
import './PinMenu.css'

function PinMenu() {

  return (
    <div className="SinglePM-container">
      <div>Edit Pin</div>
        <OpenModalButton
          buttonText="Delete Pin"
          // onItemClick={closeMenu}
          modalComponent={<DeletePinModal />}
        />

    </div>

  )
}

export default PinMenu
