
import img1 from "../../img/banner/banner2.jpg"
import "./SecondBanner.css"
const SecondBanner = () => {
  return (
    <div className='bannerRapper'>
        <div className="banner">
            <div className="contenttt">
                <div className="mainContent">
                    <h1>Comfortable & Elegante Living</h1>
                    <p>RAOUF Products are all made to standard sizes so that you can mix and match them freely.</p>
                    <button>SHOP ON</button>
                </div>
            </div>
            <div className="img">
                <img src={img1} alt="banner-img2" />
            </div>
        </div>
    </div>
  )
}

export default SecondBanner