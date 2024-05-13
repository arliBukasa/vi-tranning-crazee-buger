import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter,Route,RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx'
import ErrorPage from './ErrorPage.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
