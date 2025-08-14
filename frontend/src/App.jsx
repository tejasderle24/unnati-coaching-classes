import React from 'react'
import Navbar from './components/Navbar'
import { About, Admission, Contact,  Gallery, Home, Results, OurCourses } from './pages'
import { Route, Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div >
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/ourcourses' element={<OurCourses/>} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/courses/:type" element={<Courses />} /> */}
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
