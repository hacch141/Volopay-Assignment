import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Components/Header';
import Your from './Components/Your';
import All from './Components/All';
import Blocked from './Components/Blocked';
import RightHeader from "./Components/RightHeader";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <nav className="navbar">
            <ul className="left-header">
              <li><NavLink className='nav-link' to="your"> Your </NavLink></li>
              <li><NavLink className='nav-link' to="all"> All </NavLink></li>
              <li><NavLink className='nav-link' to="blocked"> Blocked </NavLink></li>
            </ul>
          <div><RightHeader /></div>
        </nav>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="your" element={<Your />} />
          <Route path="all" element={<All />} />
          <Route path="blocked" element={<Blocked />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
