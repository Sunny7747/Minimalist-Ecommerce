import "./TrensdingSec.css"
import alldata from "../Alldata"


const TrendingCard = () => {
    const filderedData = alldata.filter((items) => items.id >= 8)
    return (
        <>
            {filderedData.map((currentItems) => {
                return (<div key={currentItems.id} className='cardrapper'>
                    <div className='card'>
                        <div className="imgugu">
                            <img src={currentItems.img} alt="img" />
                        </div>
                        <div className="nameAndPrice">
                            <p>{currentItems.description}</p>
                            <h3>{currentItems.price} $</h3>
                        </div>
                    </div>
                </div>)
            })}
        </>
    )
}

export default TrendingCard