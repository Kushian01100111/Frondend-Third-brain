import { Route, Routes } from "react-router";
import { useState } from "react";
import Login from "./pages/Login/Login";
import Homepage from "./pages/Homepage/Homepage";
import Signup from "./pages/Signup/Signup";

function App() {
  const [userName, setUserName] = useState('');

 const submitSignUp = async(userSignUp)=>{
  const res = await fetch ('http://localhost:2121/signup', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(userSignUp)
      })

      const data = await res.json()
      console.log(data)
 }
  return (
    <div className="App"> 
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup submitSignUp={submitSignUp}/>} />
            {/* <Route path="/"/> */}
        </Routes>
    </div>
  );
}

export default App;
