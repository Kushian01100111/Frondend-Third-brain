import './Signup.css'
import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Footer from '../../components/Footer/Footer'

const Signup = () => {
  return (
      <>
      <nav className='flex-nav'>
        <div className='flex-start'>
          <Link to='/'><Button text={'Go back'}/></Link>
        </div>
      </nav>
      <div>

      </div>
    <Footer/>
    </>
  )
}

export default Signup
