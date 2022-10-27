import './Login.css'
import { Link , Navigate} from "react-router-dom"
import Button from "../../components/Button/Button"
import { useState, useEffect } from 'react'

const Login = ({submitLogin,error,user}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('')

  const onSubmit = async (e)=>{
    e.preventDefault()
      if(!email && !password){
         setErrors('Complete the form correctly')
      }else{ 
        await submitLogin({email,password})}

      setErrors(error.errors)
      console.log(errors)
  }

  return (
    <>
     {user &&  (<Navigate to="/main" />)}
      <nav className='flex-nav'>
        <div className='flex-start margin'>
          <Link to='/'><Button text={'Go back'}/></Link>
        </div>
      </nav>
      <div className='loginForm'>
      <h1>Login</h1>
        <form action="" className='form' onSubmit={onSubmit}>
          <div className='formDiv'>
            <label htmlFor="email"><p className='label'>Email address</p>
              <input type="email" 
              id='email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter email address'/>
            </label>
            <label htmlFor="password"><p className='label'>Password</p>
              <input type="password" 
              id='password' 
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              placeholder='Enter your password'/>
            </label>
            <Button text={'Login'} type={'submit'} sucClass={'submitButton'}/>
          </div> 
          <div className='goo'>
            <Link><Button text={'Login with Google'} sucClass={'google'} icons={true}/></Link>
          </div>
        </form>
        <p>You don't have an account?<Link to='/signup'><span> Sign Up</span></Link></p>
      </div>
    </>
  )
}

export default Login
