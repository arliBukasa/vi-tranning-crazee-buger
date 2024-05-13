import React from 'react'
import { BrowserRouter, Route,Routes, createBrowserRouter } from 'react-router-dom';
import LoginPage from '../components/pages/LoginPage';
import ErrorPage from '../ErrorPage';
import OrderPage from '../components/pages/OrderPage';
import Root from './root';

 
 export default function MRoutes() {
   return (
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>}  errorElement={<ErrorPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/order' element={<OrderPage/>} />
            <Route path='/default' element={<Root/>}/>
        </Routes>   
     </BrowserRouter>
   )
 }

