import { IconChevronLeft } from "@tabler/icons-react";
import {Link} from "react-router-dom"
import { useState } from "react"
import "./navigator.css"

const Navigate = () => {
    const [title,setTitle] = useState("all")

    function HandelTitleChange(e){
        const newVal = e.target.innerText
        setTitle(newVal)
    }
  return (
    
    <div className="navigate-container">
        <div className="title-container">
            <div className="home-btn">
                <Link to="/">
                    <IconChevronLeft /> Home
                </Link>
            </div>
            <div className="title">
                <h1>{title.toUpperCase()}</h1>
            </div>
        </div>
        <div className="all-btns-container">
            <Link to="/categories/all">
                <button onClick={HandelTitleChange}>
                    All
                </button> 
            </Link>
            <Link to="/categories/furnitures">
                <button onClick={HandelTitleChange}>
                    Furnitures
                </button> 
            </Link>
            <Link to="/categories/electronics">
                <button onClick={HandelTitleChange}>
                    Electronics
                </button> 
            </Link>
            <Link to="/categories/lamps">
                <button onClick={HandelTitleChange}>
                 Lamps
                </button> 
            </Link>
            <Link to="/categories/kitchen">
                <button onClick={HandelTitleChange}>
                    Kitchen
                </button> 
            </Link>
            <Link to="/categories/chairs">
                <button onClick={HandelTitleChange}>
                 Chairs
                </button> 
            </Link>
            <Link to="/categories/skin-care">
                <button onClick={HandelTitleChange}>
                Skin care
                </button> 
            </Link>
        </div>
    </div>
  )
}

export default Navigate