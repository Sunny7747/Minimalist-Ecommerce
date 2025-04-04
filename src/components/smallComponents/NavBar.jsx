import "./NavBar.css";
import React, { useEffect } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";

const NavBar = () => {

  const [cartInOut, setCartInOut] = React.useState(false);
  const [mobileInOut, setmobileInOut] = React.useState(false);



// nav bar padding handleer on scrool ▾
  useEffect(() => {
    const handleScroll = () => {
      const navRapper = document.querySelector('.navRapper');
      const logo = document.querySelector('.logo span');
      if (window.scrollY > 1) {
        navRapper.style.padding = '15px 50px';
        logo.style.fontSize = '25px';
      } else {
        navRapper.style.padding = '30px 5rem';
        logo.style.fontSize = '35px';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // handel mobile Nav
  function handelMobileNav(){
    setmobileInOut(!mobileInOut)
  }

  // cart open and close handler ▾
  const handelCartOnOff = () => {
    setCartInOut(!cartInOut)
    console.log(cartInOut)
  };
  return (
    <>
    <nav className="navRapper">
      <Link to="/">
        <div className="logo">
         <span>M E W</span>
       </div>
      </Link>
      <div className="content">
        <Link to="/categories/all"><p>CATEGORIES</p></Link>
        <p>PRODUCT PAGE</p>
        <div onClick={handelCartOnOff} className="cart">
          <FiShoppingCart />
          <span id="cartItems">1</span>
        </div>
        <div onClick={handelMobileNav} className="hb">
          <GiHamburgerMenu />
        </div>
      </div>
    </nav>


    {/* mobile nav sec */}
    <div className={`mobileNavOn ${mobileInOut ? "mobileNavOff" : "mobileNavOn"}`}>  
      <div onClick={handelMobileNav}>
        <IoMdClose />
      </div>
      <h3>CATEGORIES</h3>
      <h3>LAMPS</h3>
      <h3>PRODUCT PAGE</h3>
    </div>


    {/* cart managment */}
    <div className={`cartRapperOn ${cartInOut ? "cartRapperIn" : "cartRapperOut"}`}>
      <div className="yourShoppingCart">
        <h1>Your Shopping Cart</h1>
        <div className="closeHb">
          <IoMdClose  onClick={handelCartOnOff}/>
        </div>
      </div>
      <div className="emptyMessage">
        <EmptyCart />
      </div>
    </div>
    
    </>
    
  );
};

export default NavBar;
