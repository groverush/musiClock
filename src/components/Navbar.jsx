import "../styles/navbar.css";
import logo from "../assets/musiclock.png";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<header className="header">
			<nav className="navbar">
				<Link to="/learn">
					<img src={logo} alt="musiclock logo" />
					<h4>Musiclock</h4>
				</Link>
			</nav>
		</header>
	);
};
export default Navbar;
