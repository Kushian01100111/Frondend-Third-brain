import { Route, Routes, Navigate , useNavigate} from "react-router";
import { useState } from "react";
import Login from "./pages/Login/Login";
import Homepage from "./pages/Homepage/Homepage";
import Signup from "./pages/Signup/Signup";
import Main from  "./pages/Main/Main"

function App() {
  const [user, setUser] = useState({})
  const [session, setSession] = useState({})
  const [errors, setErrors] = useState({})

 const submitSignUp = async(userSignUp)=>{
      const res = await fetch ('http://localhost:2121/signup', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(userSignUp)
      })
      const data = await res.json()
      if(data.length > 1){
        setUser(data.user)
        setSession(data.session)
      }else setErrors(data)
      console.log(errors)
 }

 const submitLogin = async(userLogin)=>{
  const res = await fetch ('http://localhost:2121/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(userLogin)
  })
  const data = await res.json()
  if(data.length > 1){
    setUser(data)
    setErrors({})
  }else setErrors(data)
  console.log(errors)
}

const LogOut = async() =>{
  setUser({})
  setSession({})
}
 
  return (
    <div className="App"> 
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<Login submitLogin={submitLogin} error={errors} user={user}/>} />
            <Route path="/signup" element={<Signup submitSignUp={submitSignUp} error={errors} user={user}/>} />
            <Route path="/main" element={<Main logOut={LogOut} />}/> 
        </Routes>
    </div>
  );
}

export default App;
