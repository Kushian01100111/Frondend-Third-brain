import { Link } from "react-router-dom"
import './Header.css'
import Button from "../Button/Button"
import logo from '../../imgs/logo.png'

const Header = () => {
  return (
    <nav className="nav">
        <ul className="flex-nav">
            <div className="flex-start">
            <a href="#">Features</a>
            <a href="#">Who i am?</a>                
            </div>
             <div>
             <Link >
             <img src={logo} alt="Logo" className="logo"/>
             </Link>
             </div>
            <div className="flex-end">
                <Link>Login</Link>
                <Link><Button text={'Sign Up'}/></Link>
            </div>
        </ul>
    </nav>
  )
}

export default Header
