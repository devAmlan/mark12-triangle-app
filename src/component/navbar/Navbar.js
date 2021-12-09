import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div>
        <div className="navbar">
        <ul>
        <Link to="/" style={{textDecoration:"none",color:"#F6F6F6"}}><li>Is Triangle?</li></Link>
         <Link to="/quiz" style={{textDecoration:"none",color:"#F6F6F6"}}><li>Quiz</li></Link>
         <Link to="/hypotenuse" style={{textDecoration:"none",color:"#F6F6F6"}}><li>Hypotenuse</li></Link>
         <Link to="/area" style={{textDecoration:"none",color:"#F6F6F6"}}><li>Area of Triangle</li></Link>
         
         </ul> 
           
        </div>
        </div>
    )
}

export default Navbar
