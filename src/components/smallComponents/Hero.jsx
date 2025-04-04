
import "./Hero.css"
import Main1 from "../img/header/home-img-1.jpg"
import Main2 from "../img/header/home-img-2.jpg"
import Main3 from "../img/header/home-img-3.jpg"
import Main4 from "../img/header/home-img-4.jpg"
import { Link } from "react-router-dom"



const Hero = () => {
  return (
    
      <div className="container">
        <div className="gridContainer">
          <Link to="/categories/furnitures">
            <div className="featured gridOne">
             <img src={Main1} alt="img1" />
              <p className="mainDec">Live Comfortabely</p>
            </div>
          </Link>
          <Link to="/categories/skin-care">
            <div className="featured gridTwo">
              <img src={Main2} alt="img2" />
              <p className="mainDec">Skin Care</p>
            </div>
          </Link>
          <Link to="/categories/kitchen">
            <div className="featured gridThree">
              <img src={Main3} alt="img3" />
              <p className="mainDec">Kitchen</p>
            </div>  
          </Link>
          <Link to="/categories/electronics">
            <div className="featured gridFour">
              <img src={Main4} alt="img4" />
              <p className="mainDec">Electronics</p>
            </div>
          </Link>
        </div>
      </div>

  )
}

export default Hero