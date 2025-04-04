
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footerRapper">
        <div className="newsLetter">
            <h1>Newsletter</h1>
            <div className="inputAndBtn">
                <input placeholder='Your@email.com' type="email" />
                <button>Subscribe</button>
            </div>
        </div>
        <div className="endFotter">
            <div className="links">
                <a href="/">About</a>
                <a href="/">Store Locator</a>
                <a href="/">FAQs</a>
                <a href="/">News</a>
                <a href="/">Careers</a>
                <a href="/">Contact Us</a>
            </div>
            <div className="copyright">
                <p>© 2015</p>
            </div>
        </div>
    </div>
  )
}

export default Footer