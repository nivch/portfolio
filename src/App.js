import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Education from './components/pages/Education';
import WorkExperience from './components/pages/WorkExperience';


function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Education' element={<Education/>} />
            <Route path='/WorkExperience' element={<WorkExperience/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;