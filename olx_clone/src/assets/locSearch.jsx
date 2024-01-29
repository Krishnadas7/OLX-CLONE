import React from "react"
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import './assets.css'

 function LocationSearch(){
    return(
        <>
        <div className="loc-search-bundle">
         <IoIosSearch className="loc-search"/>
         <input placeholder="Search city,area or loc..." className="input-search" type="text" />
         <IoIosArrowDown className="arrow-icon" />
         </div>
        </>
    )
}

export default LocationSearch