import { useState, useRef, useEffect } from "react"

import OpenModalButton from "../../OpenModalButton"
import EditPinModal from "./EditPinModal"
import DeletePinModal from "./DeletePinModal"
import './PinMenu.css'


function PinMenu() {
  const dropdownRef = useRef(null);
  const [menu, setMenu] = useState('SinglePM-container');


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenu('hidden')
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };

  }, [dropdownRef])

  return (
    <div className={menu} ref={dropdownRef}>
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
