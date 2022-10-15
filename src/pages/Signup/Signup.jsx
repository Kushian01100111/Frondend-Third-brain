import './Signup.css'
import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import { useState } from 'react'

const Signup = ({submitSignUp}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const onSubmit = async (e)=>{
    e.preventDefault()
      if(!name && !email && !password){
         setErrors('Complete the form correctly')
      }else submitSignUp({name,email,password})
  }
  return (
    <>
    <nav className='flex-nav'>
      <div className='flex-start margin'>
        <Link to='/'><Button text={'Go back'}/></Link>
      </div>
    </nav>
    <div className='loginForm'>
    <h1>Sign up</h1>
      <p className='errors' value={errors}></p>
      <form action="" className='form' onSubmit={onSubmit}>
        <div className='formDiv'>
        <label htmlFor="name"><p className='label'>User name</p>
            <input type="text" 
            id='name' 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter User name'/>
          </label>
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
          <Button text={'Create account'} type={'submit'} sucClass={'submitButton'}/>
        </div> 
        <div className='goo'>
          <Link><Button text={'Create account with google'} sucClass={'google'} icons={true}/></Link>
        </div>
      </form>
      <p>Already have an account?<Link to='/login'><span> Login</span></Link></p>
    </div>
  </>
  )
}

export default Signup
