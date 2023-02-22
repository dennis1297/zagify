import "./navbar.css";
import mainlogo from "./mainlogo.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
      <img src={mainlogo} alt="logo"/>
        <div className="navItems">  
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar