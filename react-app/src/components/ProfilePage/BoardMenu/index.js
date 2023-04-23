import { useHistory } from "react-router-dom"
import "./BoardMenu.css"
import { useEffect, useRef, useState } from "react";
import OpenModalButton from "../../OpenModalButton";
import BoardPinModal from "./BoardPinModal";

function BoardMenu() {
  const history = useHistory();
  const dropdownRef = useRef(null);
  const [menu, setMenu] = useState('BM-drop-menu');

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
      <div className="BM-inner-selection">
        <h5>Create</h5>
        <h4 className='BM-h4' onClick={() => history.push('/new-pin')}>Pin</h4>
        <OpenModalButton
            buttonText="Board"
            modalComponent={<BoardPinModal />}
            className={'BM-board-button'}
        />
      </div>
    </div>
  )
}

export default BoardMenu
