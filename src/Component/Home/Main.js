import React from "react";
import { FaCamera, FaCameraRetro, FaDownload, FaFileDownload, FaPlay, FaPlayCircle, FaSearch, FaVimeoSquare } from "react-icons/fa";
import { movies } from "../../data";
import { BiCameraMovie, BiMoviePlay } from "react-icons/bi";
import img6 from "../../pics/download.jpg";
import img1 from "../../pics/images3.jpg";
import img2 from "../../pics/images1.jpg";
// import nanoMetadata from "nano-metadata";
const Main = () => {

	const change = (e) => {
		console.log(e);
	
	};
	return (
		<main className="container">
			<h2>Welcome to Ustream</h2>
			<h4>Home to the best movies on box office</h4>
			<div className="input-container">
				<input type="text" className="input" placeholder="search" />
				<div className="search-btn">
					<FaSearch />
				</div>
			</div>
			<div className="section">
				<div className="movies">
					<h3>latest movies</h3>
					<div className="Home-latest-movies">
						<div className="movie">
							<img src={img6} alt="" />
						</div>
						<div className="movie">
							<img src={img1} alt="" />
						</div>
						<div className="movie">
							<img src={img2} alt="" />
						</div>
					</div>
				</div>
				<div className="vote-section">
					<h3>vote for the thursday night cinema movie of the week</h3>
					<div className="Home-latest-movies">
						<div className="movie">
							<img src={img6} alt="" />
						</div>
						<div className="movie">
							<img src={img1} alt="" />
						</div>
						<div className="movie">
							<img src={img2} alt="" />
						</div>
					</div>
				</div>
				<div className="community-section">
					<h3>become a ustream community member</h3>
					<div className="community">
						<div className="member">
							<FaDownload />
							<input type="file" accept="video/*" onChange={change} />
							<p>upload your scripts or video for voting and reviews</p>
						</div>
						<div className="member">
							<BiMoviePlay />
							<p>stand a chance to have your script selected by top movie producers</p>
						</div>
						<div className="member">
							<BiCameraMovie />
							<p>have your skits featured in the thursday night cinema</p>
						</div>
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
