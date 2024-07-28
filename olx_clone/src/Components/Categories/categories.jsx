import './categories.css'
import { IoIosArrowDown } from "react-icons/io";
function categories(){
    return(
        <>
         <div className="category flex">
            <div className='flex'>
                <span className='category-title'><b>ALL CATEGORIES</b></span>
                <IoIosArrowDown className="category-downarrow-icon" />
            </div>
            <div>
               <ul className='flex'>
                <li className='cat-items'>Cars</li>
                <li className='cat-items'>Motorcycles</li>
                <li className='cat-items'>Mobile Phones</li>
                <li className='cat-items'>For sale:Houses & Apartments</li>
                <li className='cat-items'>Scooters</li>
                <li className='cat-items'>Commerical & Other Vehicles</li>
                <li className='cat-items'>For Rent:House & Apartments</li>
               </ul>
            </div>
            
         </div>
        </>
    )
}
export default categories