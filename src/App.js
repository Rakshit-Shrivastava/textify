import './App.css';
import React, { useState } from "react";
import { Form } from './Components/Form';
import { Navbar } from './Components/Navbar';
import { About } from './Components/About';
import { Alert } from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const changeMode = () => {
    if (mode === 'light')
      setMode('dark');
    else {
      setMode('light');
    }
  }

  const showAlert = (message, type) => {
      setAlert({
        message: message,
        type: type
      });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  };

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  return (
    <div className='app' style={{ backgroundColor: `${mode === 'light' ? 'white' : '#132022'}` }}>
      <Router>
        <Navbar changeMode={changeMode} mode={mode} />
        <Alert alert={alert}/>
        <Routes>
          <Route path="/textify" element={<Form mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
