import React from "react";
import { FaDownload, FaPlay, FaSearch } from "react-icons/fa";
import { movies } from "../../data";
import img6 from "../../pics/images4.jpg";
import { useGlobalContext } from "../../context";
const Main = () => {
		const { closeEarnings, closeWallet } = useGlobalContext();

	return (
		<main className="container" >
			<h2>Welcome to Ustream</h2>
			<h4>Home to the best movies on box office</h4>
			<div className="input-container">
				<input type="text" className="input" placeholder="search our movies catalog today" />
				<div className="search-btn">
					<FaSearch />
				</div>
			</div>
			<div className="section">
				<div className="movies">
					<h3>latest movies</h3>
					<div className="latest-movies">
						{movies.map((movie, index) => {
							const { img, text } = movie;
							return (
								<div className="img-container" key={index}>
									<img src={img} alt={text} />
									<div className="img-title">
										<p>Lorem ipsum dolor sit amet consectetur ggheths shetdg gdgghs tehxn  </p>
										<div className="btns">
											<button className="stream">stream <FaPlay/></button>
											<button className="save">save <FaDownload/> </button>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="slides">
				<div className="slide">
					<img src={img6} alt="img" />
				</div>
			</div>
		</main>
	);
};

export default Main;
