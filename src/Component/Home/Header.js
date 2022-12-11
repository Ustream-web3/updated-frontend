import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../../data";
import { Link } from "react-router-dom";
import logo from "../../pics/Ustream.svg";
import { useGlobalContext } from "../../context";
const Header = () => {
	const {openWallet,openEarnings} =useGlobalContext()
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);
	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};
	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	}, [showLinks]);
	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} className="logo" alt="logo" />
					<button className="nav-toggle" onClick={toggleLinks}>
						<FaBars />
					</button>
				</div>
				<div className="links-container" ref={linksContainerRef}>
					<ul className="links" ref={linksRef}>
						{links.map((link) => {
							const { id, url, text } = link;
							return (
								<li key={id}>
									<Link to={url}>{text}</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<ul className="social-icons">
					{social.map((socialIcon,index) => {
						const { id, icon } = socialIcon;
						let desc ='';
						if (index===0) {
							desc=openWallet
						} else if (index === 1) {
							desc = openEarnings;
						}
						else{
							desc=''
						}
						return (
							
							<li key={id} onClick={desc}>
								{icon}
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Header;
