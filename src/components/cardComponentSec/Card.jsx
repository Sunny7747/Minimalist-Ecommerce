import "./Card.css"

const Card = (props) => {
  return (
    <div className='cardrapper'>
    <div className='card'>
        <div className="imgggg">
            <img src={props.img} alt="img" />
        </div>
        <div className="nameAndPrice">
            <p>{props.name}</p>
            <h3>{props.price} $</h3>
        </div>
    </div>
    </div>
  )
}

export default Card