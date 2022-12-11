import React from 'react'
import Footer from "./Home/Footer";
import Header from "./Home/Header";
const SharedLayout = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default SharedLayout
