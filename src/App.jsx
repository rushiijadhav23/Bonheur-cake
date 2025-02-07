import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import Specialties from "./components/Specialties"
import CakeVideos from "./components/CakeVideos"
import Reviews from "./components/Reviews"
import Menu from "./components/Menu"
import About from "./components/About"
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <Router>
      <div className="w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div id="categories"><Categories /></div>
              <div id="specialties"><Specialties /></div>
              <div id="videos"><CakeVideos /></div>
              <div id="reviews"><Reviews /></div>
            </>
          } />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App