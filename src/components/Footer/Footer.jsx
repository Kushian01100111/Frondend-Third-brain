import { Link } from 'react-router-dom'
import Logo  from '../../imgs/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer-center'>
        <div  className='grid-child'>
            <Link to='/'><img src={Logo} alt="Logo"  className='logo'/></Link>
        </div>
        <div className='grid-child'>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">License</a>
        </div>
        <div>
            <div>
                <p>Copyright © 2022 - All right reserved by Pedro Comas</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
