import "./components/cardComponentSec/Card.css"
import Hero from "./components/smallComponents/Hero.jsx"
import Card from './components/cardComponentSec/Card.jsx'
import items from "./components/Alldata"
import Banner from "./components/smallComponents/bannerComponent/Banner"
import TrendingSlider from "./components/TrendingCardComponent/TrendingSlider"
import SecondBanner from "./components/smallComponents/bannerComponent/SecondBanner"
import Footer from "./components/Footer/Footer"

const Home = () => {
  const onlyData = items.filter((filterItems)=> filterItems.id <= 8);
  
  return (
    <>
      <div style={{padding: "0 3rem"}}>
        <Hero />
        <h2 style={{marginTop: "5rem", fontSize: "2rem"}}>Products we are proud of</h2>
        <div className="cardGridContainer">
        {onlyData.map((items)=>{
          return <div key={items.id}> 
          <Card 
              img={items.img}
              name={items.description}
              price={items.price}
            /></div> 
        })}
        </div>
        <Banner />
        <TrendingSlider />
        <SecondBanner />
    </div>
        <Footer />
    </>
  )
}

export default Home