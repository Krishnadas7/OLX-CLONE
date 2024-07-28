import React from "react";
import Navbar from "../Components/Navbar/navbar";
import Categories from "../Components/Categories/categories";
import Row from "../Components/Rows/row";
import Footer from "../Components/Footer/footer";

function Home(){
    return(
        <>
         <Navbar/>
         <Categories/>
         <Row/>
         <Footer/>
        </>
    )
}
export default Home