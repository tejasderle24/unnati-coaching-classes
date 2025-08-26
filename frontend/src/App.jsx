import React from 'react'
import Navbar from './components/Navbar'
import { About, Admission, Contact, Gallery, Home, Results, Courses } from './pages'
import { Route, Router, Routes } from 'react-router-dom'
import StudentRegister from './components/students/StudentRegister'

const App = () => {
  return (
    <div >
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/results" element={<Results />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />


        </Routes>
      </div>

    </div >
  )
}

export default App
