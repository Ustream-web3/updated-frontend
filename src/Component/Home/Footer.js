import React from 'react'
import logo from "../../pics/Ustream.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
		<footer>
			<div className="FooterLogo">
				<img src={logo} alt="" />
			</div>
			<div className="footer-links">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Movies">Movies</Link>
					</li>
					<li>
						<Link to="/Earning">Earning</Link>
					</li>
					<li>
						<Link to="/TN Cinema">TN Cinema</Link>
					</li>
					<li>
						<Link to="/Community">Community</Link>
					</li>
					<li>
						<Link to="/Skits">Skits</Link>
					</li>
				</ul>
			</div>
			<div className="footerNavigation">links & site navigation</div>
			<div className="information">
				<p>contact information / helpline</p>
				<p>social media links</p>
			</div>
		</footer>
	);
}

export default Footer
