import React from 'react';
import Login from './components/Login';
import './App.css';
// import Form from './Form';
// import Increment from './Increment';
import Signup from './components/Signup';
// import Navbar from './components/Navbar';
import {
  Routes,
  Route
} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

const ThemeContext = React.createContext();

function App() {
  return (
    <>
      <ThemeContext.Provider>
        <div className="h-100 grid place-items-center">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='signup' element={<Signup />} />
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='portfolio' element={<Portfolio />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
