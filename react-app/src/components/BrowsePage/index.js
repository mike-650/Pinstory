import { useHistory } from "react-router-dom";
import logo from "../../images/pinstory-icon.png"

import './BrowsePage.css'


function BrowsePage({ isLoaded }) {
  const history = useHistory();

  if (!isLoaded) {
    return history.push('/')
  }
  return (
    <div className="BR-navigation-bar">
      {/* <img src={logo} alt='Pinstory logo' id='home-icon'/> */}
      <h1>HERE</h1>
    </div>
  )
}

export default BrowsePage;
