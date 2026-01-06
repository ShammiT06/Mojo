import React from 'react'
import Header from './Components/Reusable Components/Header'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import MainLayout from './layouts/MainLayout'
import ScrollToTop from './Components/ScollTop'
import Course from './Pages/Course'
import Contact from './Pages/Contact'
import Galleri from './Pages/Galleri'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path="/course" element={<Course/>} />
            <Route path='/gallery' element={<Galleri/>} />
            <Route path='/contact' element={<Contact/>} />

          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}
