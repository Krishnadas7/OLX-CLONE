import React from "react";
import { IoIosSearch } from "react-icons/io";

function SearchBar(){
    return(
        <>
         <div className="search-bar-bundle flex">
            <input className="search-input" placeholder="Find Cars,Mobile Phones and more..." type="text" />
            <button className="search-button"><IoIosSearch className="search-bar-icon"/></button>
         </div>
        </>
    )
}
export default SearchBar