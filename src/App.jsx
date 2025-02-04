import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import CakeIngredients from "./components/CakeIngredients"
import './App.css'

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Categories />
      <CakeIngredients />
    </div>
  )
}

export default App