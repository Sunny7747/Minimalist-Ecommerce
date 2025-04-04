// import AllCategoriesItems from "./AllCategoriesItems"
import Navigate from "./Navigate"
import { Outlet } from "react-router-dom";
import "./allItems.css"
import Footer from "../Footer/Footer";

const Categories = () => {
 
  return (
    <div className="main">
      {/* <AllCategoriesItems /> */}
      <Navigate />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Categories