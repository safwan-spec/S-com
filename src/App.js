import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './Components/Header'

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import Category from './Pages/Category'
import FilterProduct from './Pages/FilterProduct'
function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
    
      
    <Route path='/' element={<Home/>}/> 
    <Route path='/about' element={<About/>}/>  
    <Route path='/contact' element={<Contact/>}/> 
    <Route path='/category' element={<Category/>}/>
     <Route path='/product' element={<Products/>}/>
     <Route path='/cat-product/:catname' element={<FilterProduct/>}/>
     
      </Routes>
      </BrowserRouter></>
  )
}

export default App

