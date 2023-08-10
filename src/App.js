import axios from 'axios';
import {useEffect, useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Anime from './Pages/Anime/Anime';


const App =() =>{
  
    return (
    <div className="App">
      <h1>Anime</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/anime/:id" element={<Anime />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
