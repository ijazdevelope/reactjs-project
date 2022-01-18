import React from 'react';
import Login from './components/Login';
import Form from './Form';
import Increment from './Increment';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App p-4">
      <Login />
      <Signup />
      <Navbar />
    </div>
  );
}

export default App;
