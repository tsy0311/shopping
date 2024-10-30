import Logo from "../../images/logo.png";
import "./index.css";

function NavBar() {
    return (
        <nav>
            <img src={Logo} className="logo" />
            <ul>
                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>
                    <a href="#Product"> Product</a>
                </li>
                <li>
                    <a href="#FAQ" className="faq">FAQ</a>
                </li>
                <li>
                    <a href="#cart" className="cart">Cart<span>0 </span></a>
                    
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;