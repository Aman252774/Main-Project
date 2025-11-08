import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import And from "./Components/And"
import Or from "./Components/Or"
import Xor from "./Components/Xor"
import LeftShift from "./Components/LeftShift"
import RightShift from "./Components/RightShift"

function App() {
  return (
    <Router>
    <Routes>
     <Route path="/" element={<Navigate to= "/and"/>}/> 
    <Route path="/and" element={<And/>}/>
    <Route path="/or" element={<Or/>}/>
    <Route path="/xor" element={<Xor/>}/>
    <Route path="/ls" element={<LeftShift/>}/>
    <Route path="/rs" element={<RightShift/>}/>
    </Routes>
    </Router>
    
  );
}

export default App;
