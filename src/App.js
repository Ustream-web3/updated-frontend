// import { useState } from "react";
import Main from "./Component/Main";
import Home from "./Component/Home/Home";
import Movies from "./Component/Movies/Movies";
// import Skits from "./Component/Movies/Movies";
import Earning from "./Component/Earning";
import { Route,Routes } from "react-router-dom";
import Skit from "./Component/Skit/Skit";
import SkitMain from "./Component/Skit/SkitMain";
function App() {
	return (
		<>

		 <Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/Movies' element={<Movies/>}/>
			<Route path='/Skits' element={<Skit/>}/>
		 </Routes>
			<Main />
			<Earning />
		</>
	);
}
export default App;
