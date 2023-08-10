import axios from 'axios';
import {useEffect, useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Anime from './Pages/Anime/Anime';
import './App.scss';


const App =() =>{
  
    return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/anime/:title" element={<Anime />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
