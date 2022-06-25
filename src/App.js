import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home';
import Summary from './components/Summary/Summary';
import MyProjects from './components/MyProjects/MyProjects';
import ContactMe from './components/ContactMe/ContactMe';
function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/summary" element={<Summary/>}/>
        <Route exact path="/myProjects" element={<MyProjects/>}/>
        <Route exact path="/contact" element={<ContactMe/>}/>
      </Routes>
    </>
  );
}

export default App;
