import { useRef, useState, useEffect } from 'react';
import OpenModalButton from '../../OpenModalButton';
import DeleteBoardModal from './DeleteBoardModal'
import './BoardOptions.css'

function BoardOptionsMenu() {
  const dropdownRef = useRef(null);
  const [menu, setMenu] = useState('BO-dropdown-menu');

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
      <p>Board options</p>
      {/* <OpenModalButton
      buttonText="Edit Board"
      modalComponent={<EditPinModal />}
      className={'EP-modal-button'}
    /> */}
      <OpenModalButton
        buttonText="Delete Board"
        modalComponent={<DeleteBoardModal />}
        className={'DP-modal-button'}
      />
    </div>
  )
}

export default BoardOptionsMenu
