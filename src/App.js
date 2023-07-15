import React,{Component,useState,useEffect} from 'react';
import './Styles/App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import axios from 'axios';

import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import ScanWithDT from './Components/ScanWithDT';
import ScanWithRF from './Components/ScanWithRF';
import ScanWithKNN from './Components/ScanWithKNN';
import ScanWithXGB from './Components/ScanWithXGB';
import ScanWithLR from './Components/ScanWithLR';
import ScanWithSVM from './Components/ScanWithSVM';
import Dashboard from './Components/Dashboard';
import Archive from './Components/Archive';
import NSLKDD from './Components/NSLKDD';
import UNSW from './Components/UNSW';



function App(){

  return (
    
        <Routes> 
            <Route path='/' element={<HomePage/>} />
            <Route path='/AboutUs' element={<AboutUs/>} /> 
            <Route path='/Services' element={<Services/>} />
            <Route path='/ScanWithDT' element={<ScanWithDT/>} />
            <Route path='/ScanWithRF' element={<ScanWithRF/>} />
            <Route path='/ScanWithKNN' element={<ScanWithKNN/>} />
            <Route path='/ScanWithXGB' element={<ScanWithXGB/>} />
            <Route path='/ScanWithLR' element={<ScanWithLR/>} />
            <Route path='/ScanWithSVM' element={<ScanWithSVM/>} />
            <Route path='/Dashboard' element={<Dashboard/>} />
            <Route path='/Archive' element={<Archive/>} />  
            <Route path='/NSLKDD' element={<NSLKDD/>} />  
            <Route path='/UNSWNB15' element={<UNSW/>} />  


        </Routes>
    
  );
}

export default App;
