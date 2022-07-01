import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Register from "./Register"
import Login from './Login';
import Home from './Home';
import Display from './Display';
const App = () => {
  return (
    <div>
     <Router>
       <Routes>
       <Route path="/home" element={<Protected><Home></Home></Protected>}></Route>
       <Route path='/cart' element={<Protected><Display></Display></Protected>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/" element={<Register></Register>}></Route>
       </Routes>
     </Router>
    </div>
  )
}

export default App;
export function Protected({children}){
  if(localStorage.getItem('pos-user')){
    return children
  }
  else{
    return <Navigate to="/login"></Navigate>
  }
}