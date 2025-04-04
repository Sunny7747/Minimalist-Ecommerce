
import Categories from './components/categories-components/Categories'
import AllCategoriesItems from "./components/categories-components/AllCategoriesItems"
import Home from './Home'
import NavBar from './components/smallComponents/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Furniture from './components/categories-components/Furniture'
import Electronic from "./components/categories-components/Electronic"
import Lamp from "./components/categories-components/Lamp"
import Kitchen from "./components/categories-components/Kitchen"
import Chairs from "./components/categories-components/Chairs"
import SkinCare from './components/categories-components/SkinCare'



function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="categories" element={<Categories />}>
            <Route path="all" element={<AllCategoriesItems />}></Route>
            <Route path="furnitures" element={<Furniture />}></Route>
            <Route path="electronics" element={<Electronic />}></Route>
            <Route path="lamps" element={<Lamp />}></Route>
            <Route path="kitchen" element={<Kitchen />}></Route>
            <Route path="chairs" element={<Chairs />}></Route>
            <Route path="skin-care" element={<SkinCare />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
