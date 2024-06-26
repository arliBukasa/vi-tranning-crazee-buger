import React from 'react'
import { BrowserRouter, Route,Routes, createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../ErrorPage';
import OrderPage from '../components/pages/order/OrderPage';
import Root from './root';
import LoginPage from '../components/pages/login-components/LoginPage';

 
 export default function MRoutes() {
   return (
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>}  errorElement={<ErrorPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/order/:inputPrenom' element={<OrderPage/>} />
            <Route path='/default' element={<Root/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>   
     </BrowserRouter>
   )
 }

