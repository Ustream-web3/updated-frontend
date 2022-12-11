import { useState } from "react";
import Main from "./MoviesMain";

import React from "react";
import SharedLayout from "../SharedLayout";

const Movies = () => {
	return (
		<>
			<SharedLayout>
				<Main />
			</SharedLayout>
		</>
	);
};

export default Movies;
