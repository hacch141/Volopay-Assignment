import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Components/HeaderComp/Header';
import Your from './Components/PagesComp/Your';
import All from './Components/PagesComp/All';
import Blocked from './Components/PagesComp/Blocked';
import RightHeader from "./Components/HeaderComp/RightHeader";

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
          <Route path="/Volopay-Assignment" element={<All />} />
          <Route path="your" element={<Your />} />
          <Route path="all" element={<All />} />
          <Route path="blocked" element={<Blocked />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
