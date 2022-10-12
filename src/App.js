import { Route, Routes } from "react-router";
import Login from "./pages/Login/Login";
import Homepage from "./pages/Homepage/Homepage";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App"> 
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<Login />} />
             <Route path="/signup" element={<Signup />} /> 
        </Routes>
    </div>
  );
}

export default App;
