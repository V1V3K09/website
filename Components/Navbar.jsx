import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function Navbar() {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef} >
				<a href="/#" className="ml-auto" >Home</a>
				<a href="/#" className="ml-auto" >Gallery</a>
				<a href="/#" className="ml-auto" >Companies</a>
				<a href="/#" className="ml-auto" >Faq's</a>
				<a href="/#" className="ml-auto" >Contact Us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;