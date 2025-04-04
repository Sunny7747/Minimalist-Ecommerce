import "./TrensdingSec.css"
import TrendingCard from "./TrendingCard"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const TrendingSlider = () => {

    function scrollRight(){
        let slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 260;
    }

    function scrollLeft(){
        let slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 260;
    }

  return (
    <div className="slidderRapper">
        <div className="titleAndBtn">
            <h3>Trending Now</h3>
            <div className="btns">
                <button title="scrool left" onClick={scrollLeft}  className="bt">
                    <FaArrowLeft />
                </button>
                <button title="scrool right" onClick={scrollRight} className="bt">
                    <FaArrowRight />
                </button>
            </div>
        </div>
        <div className="trendingSlideRrapper" id="slider">
            <TrendingCard />
        </div>
    </div>
  )
}

export default TrendingSlider