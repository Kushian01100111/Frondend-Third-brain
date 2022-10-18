import { Route, Routes } from "react-router";
import { useState } from "react";
import Login from "./pages/Login/Login";
import Homepage from "./pages/Homepage/Homepage";
import Signup from "./pages/Signup/Signup";

function App() {
  const [user, setUser] = useState({})
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
        setUser(data)
        setErrors({})
      }else setErrors(data)
      console.log(errors)
 }
 
  return (
    <div className="App"> 
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup submitSignUp={submitSignUp} error={errors}/>} />
            {/* <Route path="/main" elemt={}/> */}
        </Routes>
    </div>
  );
}

export default App;
