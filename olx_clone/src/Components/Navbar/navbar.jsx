import React from "react"
import Logo from "../../assets/olxLogo"
import LocationSearch from "../../assets/locSearch"
import '../Navbar/navbar.css'
import SearchBar from "../../assets/searchBar"
import { IoIosArrowDown } from "react-icons/io";
import SellButton from "../../assets/sellButton"
function Navbar (){

    return(
        <>
        <div className="navbar flex">
            <div className="flex">
               <Logo/>
               <LocationSearch/>
            </div>
            <div>
            <SearchBar/>
            </div>
            <div className="flex">
                <div className="flex">
                <span className="languape-span" >ENGLISH</span>
                <button><IoIosArrowDown className="language-arrow"/></button>
                </div>
                <div className="flex">
                <button className="login-button mx-4" >Login</button>
                <SellButton/>
                </div>
            </div>

        </div>
        </>
    )
}
export default Navbar