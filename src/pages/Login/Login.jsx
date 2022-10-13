import './Login.css'
import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Footer from '../../components/Footer/Footer'

const Login = () => {
  return (
    <>
      <nav className='flex-nav'>
        <div className='flex-start margin'>
          <Link to='/'><Button text={'Go back'}/></Link>
        </div>
      </nav>
      <div className='loginForm'>
      <h1>Login</h1>
        <form action="" className='form'>
          <div className='formDiv'>
            <label htmlFor="email"><p className='label'>Email address</p>
              <input type="text" id='email' placeholder='Enter email address'/>
            </label>
            <label htmlFor="password"><p className='label'>Password</p>
              <input type="text" id='password' placeholder='Enter your password'/>
            </label>
            <Button text={'Login'} type={'submit'} sucClass={'submitButton'}/>
          </div> 
          <div className='goo'>
            <Link><Button text={'Login with Google'} sucClass={'google'} icons={true}/></Link>
          </div>
        </form>
        <p>You don't have an account<Link to='/signup'><span>Sign Up</span></Link></p>
      </div>
      <Footer/>
    </>
    
  )
}

export default Login
