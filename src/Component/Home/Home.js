import React from 'react'
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SharedLayout from '../SharedLayout';
const Home = () => {
  return (
		<>
		<SharedLayout>
			<Main />
		</SharedLayout>
		</>
	);
}

export default Home
