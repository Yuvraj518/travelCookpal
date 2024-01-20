import { NavLink } from "react-router-dom";
import Cookpal from "../Images/Cookpal.png"
import light from "../Images/light.png"

const Nav=()=>{
    return (
      <nav>
      <div><NavLink className="navLink" to="/"><img src={Cookpal} alt="cooktal"/></NavLink></div>
      <div className="n1">
        <NavLink className="navLink" to="/about"><span>About</span></NavLink>
        <NavLink className="navLink" to="/explore">Explore</NavLink>
        <NavLink className="navLink" to="/help">Help</NavLink>
        <NavLink className="navLink" to="/profile"><div className="profile-image"><img src={light} alt="profile"/></div></NavLink>
      </div>
    </nav>
      )
}

export default Nav