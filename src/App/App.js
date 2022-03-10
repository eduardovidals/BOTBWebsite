import React, {useEffect} from 'react';
import './App.css';
import Header from "./Layout/Header/Header";
import Home from "./Layout/Main/Home/Home";
import Footer from "./Layout/Footer/Footer";
import LearnMore from "./Layout/Main/LearnMore/LearnMore";
import {createUserPOST} from '../API/UserService.ts';

import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";

function App() {

  useEffect(async() => {

  })

  return (
    <Router>
      <div id="app">
        <Header/>
        <Routes>
          <Route path={'/KPMG'} element={<Home/>}/>
          <Route path={'/KPMG/learn-more'} element={<LearnMore/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

const scrollToPosition = (top = 0) => {
  try {
    /**
     * Latest API
     */
    window.scroll({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  } catch (_) {
    /**
     * Fallback
     */
    window.scrollTo(0, top);
  }
};

export default App;
