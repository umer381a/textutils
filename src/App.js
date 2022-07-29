import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Alert from './components/Alert';

const App = () => {
  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState("light")
  const showAlert = (massage, type) => {
    setAlert({
      massage:massage,
      type:type
    })
  }
  
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enable" , "success")
    }else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enable" , "success")
    }
  }
  setTimeout(()=>{
      setAlert(null)
  }, 1800)
  return (
    <>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={<TextForm heading = "Enter text to analyze" mode={mode} showAlert={showAlert}/>} />
        <Route path="/about" element={<About mode={mode}/>} />
      </Routes>
    </>
  );
}

export default App;
