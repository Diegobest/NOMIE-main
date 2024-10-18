import React, {useState} from 'react'
import Sidenav from '../Components/Sidenav'
import { FaBars, FaChevronRight } from "react-icons/fa";

function SpaceHome() {
  const [wid, setWid] = useState('0%')
  const openSidenav = () => {
    setWid('100%');
  }
  const closeSidenav = () => {
    setWid('0%');
  }
  const spaceName = {
    space: "Personal Finance FY22 💸"
  } //space name will be a prop of the component

  return (
    <div className="Space">
      <header className="ltheader">
        <div className="barcontainer" onClick={openSidenav}>
          <div><FaBars /></div>
        </div>
      </header>
      <Sidenav width = {wid} closeNav={closeSidenav}/>

      <main>
      <h2>Welcome to</h2>

      <div className="spaceName">
        <p>{spaceName.space}</p>
      </div>

      <span id="company">
        <p>You're in good company.</p>
      </span>

      <div className="spaceBubbles">
        <div className="spaceBubble">
          <div className="groupactive">
            <div className="dot">&nbsp;Active</div>
          </div>
          <div><p>Game space</p></div>
        </div>
        <div className="spaceBubble">
          <p>Groups</p>
        </div>
      </div>

      <div className="spaceMember">
        <h4>Space administrator</h4>
        <div className="spaceMemberInfo">
          <div className="profileImg"><img src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/grinning-face.png"></img></div>
          <div className="username">
            <div><p>Ms. Mulberry</p></div>
            <span id="angleRight"><FaChevronRight /></span>
          </div>
        </div>
      </div>

      <div className="spaceMember">
        <h4>Members</h4>
        {/* insert code to sort member names alphabetically */}
        <div className="spaceMemberInfo">
          <div className="profileImg"><img src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/grinning-face.png"></img></div>
          <div className="username">
            <div><p>Amelie</p></div>
            <span id="angleRight"><FaChevronRight /></span>
          </div>
        </div>
        <div className="spaceMemberInfo">
          <div className="profileImg"><img src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/grinning-face.png"></img></div>
          <div className="username">
            <div><p>Christian</p></div>
            <span id="angleRight"><FaChevronRight /></span>
          </div>
        </div>
        <div className="spaceMemberInfo">
          <div className="profileImg"><img src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/grinning-face.png"></img></div>
          <div className="username">
            <div><p>Yousef</p></div>
            <span id="angleRight"><FaChevronRight /></span>
          </div>
        </div>
      </div>
      </main>
    </div>
  )
}

export default SpaceHome