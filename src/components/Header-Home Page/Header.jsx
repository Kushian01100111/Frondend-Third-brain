import { Link } from "react-router-dom"
import './Header.css'
import Button from "../Button/Button"
import logo from '../../imgs/logo.png'

const Header = () => {
  return (
    <nav className="nav">
        <ul className="flex-nav">
            <div className="flex-start">
            <a href="#features">Features</a>
            <a href="#whoIAm">Who i am?</a>                
            </div>
             <div>
             <Link to='/'>
             <img src={logo} alt="Logo" className="logo"/>
             </Link>
             </div>
            <div className="flex-end">
                <Link to='/login'>Login</Link>
                <Link to='/signup'><Button text={'Sign Up'}/></Link>
            </div>
        </ul>
    </nav>
  )
}

export default Header
