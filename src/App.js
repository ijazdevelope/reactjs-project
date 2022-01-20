import React from 'react';
import Login from './components/Login';
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

function App() {
  return (
    <>
      <div className="app h-100 grid place-items-center p-4">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
