// import AllCategoriesItems from "./AllCategoriesItems"
import Navigate from "./Navigate"
import { Outlet } from "react-router-dom";
import "./allItems.css"

const Categories = () => {
 
  return (
    <div className="main">
      {/* <AllCategoriesItems /> */}
      <Navigate />
      <Outlet />
    </div>
  )
}

export default Categories