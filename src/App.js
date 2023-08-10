import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router,
        Route,
        Routes,}
        from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const [alert , setAlert] = useState(null)  

  const showAlert = (message , type)=>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0D1A2D'
      showAlert("dark Mode is Enable" , "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = '#E3E3E3'
      showAlert("light Mode is Enable" , "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title = "TextUtils" aboutText = "About TextUtils" modeSwitch ={mode} toggleMode = {toggleMode}/>
        <Alert alert ={alert}/>
        {/* here NO any tile given so default props work  */}
        {/* <Navbar aboutText = "About TextUtils"/> */}
        <div className="container">
        <Routes>
          <Route exact path='/about' element={<About heading = "About Us"/>}/>

          <Route exact path='/' 
            element ={<TextForm heading = "Analyse" textSwitch = {mode} showAlert = {showAlert} />}
          />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
