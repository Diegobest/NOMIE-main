import React, {useState} from 'react'
import Sidenav from '../Components/Sidenav'
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'


function MemberHome() {
  const [wid, setWid] = useState('0%')
  const openSidenav = () => {
    setWid('100%');
  }
  const closeSidenav = () => {
    setWid('0%');
  }

  const navigate = useNavigate();
  const handleGoToSpace = () => {
    navigate('/spacehome')
  }
  const handleClick = () => {
    navigate('/joinspace')
  }
  
  return (
    <div className="Space">
      <header className="ltheader">
        <div className="barcontainer" onClick={openSidenav}>
          <div><FaBars /></div>
        </div>
        <h2 className="h2center">My communities</h2>
      </header>
      <Sidenav width = {wid} closeNav={closeSidenav}/>

      <main>
        <div className="appBubble" onClick={handleGoToSpace}>
          <div className="cardtext">
            <div className="groupactive">
              <div className="dot">&nbsp;Active</div>
            </div>
          <p>General Chemistry</p>
          <div className="spaceAffiliation">Rosemont College</div>
          
          <div className="profileImgChain">
            <div className="profileImgSmall"></div>
            <div className="profileImgSmall"></div>
            <div className="profileImgSmall"></div>
            <div className="profileImgSmall"></div>
            <div className="profileImgSmall"></div>
          </div>
          </div>
        </div>
        <button className="btnBlack" onClick={handleClick}>Join a new space</button>
      </main>
    </div>
  )
}

export default MemberHome