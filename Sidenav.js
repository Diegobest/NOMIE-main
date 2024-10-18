import React from "react";
import '../App.css'

function Sidenav(props) {
  return (
    <div className="sidenav" style={{ width: props.width}}>
        <button onClick={props.closeNav}>&times;</button>
        <a href="#">My Profile</a>
        <a href="#">Something else</a>
        <a href="#">Another Link</a>
        <a href="#">Sign Out</a>
    </div>
  )
}

export default Sidenav