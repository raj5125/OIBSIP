import './App.css';
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
    <Router>
      <Routes>
        user && user._id ?
        <Route exact path="/" element={<Homepage setLoginUser={setLoginUser}/>} >
        </Route>
        :
        <Route exact path="/" element={<Login setLoginUser={setLoginUser}/>} >
        </Route>


        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </Router>
      </div>
  );
}

export default App;
