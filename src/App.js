import React from 'react';
import Login from './components/Login';
import Form from './Form';
import Increment from './Increment';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
