import OpenModalButton from "../../OpenModalButton"
import EditPinModal from "./EditPinModal"
import DeletePinModal from "./DeletePinModal"
import './PinMenu.css'


function PinMenu() {

  return (
    <div className="SinglePM-container">
      <OpenModalButton
        buttonText="Edit Pin"
        modalComponent={<EditPinModal />}
        className={'EP-modal-button'}
      />

      <OpenModalButton
        buttonText="Delete Pin"
        modalComponent={<DeletePinModal />}
        className={'DP-modal-button'}
      />
    </div>

  )
}

export default PinMenu
