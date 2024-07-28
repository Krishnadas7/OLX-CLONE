import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa"
import { FaRegPlayCircle } from "react-icons/fa";
import '../Footer/footer.css'
function footer(){
    return(
        <>
        <div className="footer-body">
           <div className="footer">
            <div>
                <span className="headings"><b>POPULAR LOCATIONS</b></span>
                <ul>
                    <li>Kolkata</li>
                    <li>Mumbai</li>
                    <li>Chennai</li>
                    <li>Pune</li>
                </ul>
            </div>
            <div>
                <span className="headings"><b>TRENDING LOCATIONS</b></span>
                <ul>
                    <li>Bubaneshwar</li>
                    <li>Hyderabad</li>
                    <li>Chandigrah</li>
                    <li>Nashik</li>
                </ul>
            </div>
            <div>
                <span className="headings"><b>ABOUT US</b></span>
                <ul>Contact Us</ul>
            </div>
            <div>
                <span className="headings"><b>OLX</b></span>
                <ul>
                    <li>Help</li>
                    <li>Sitemap</li>
                    <li>Legal & Privacy information</li>
                    <li>Vulberibality Disclosure Program</li>
                </ul>
            </div>
            <div>
                <span className="headings"><b>FOLLOW US</b></span>
                <div className="flex">
                   <FaFacebookF/>
                   <FiInstagram/>
                   <FaTwitter/>
                   <FaRegPlayCircle/>
                </div>
            </div>
           </div>
           <div className="footer-downside">
            <span style={{paddingLeft:'73px'}}>Help-Sitemap </span>
            <span style={{paddingRight:'49px'}}>All rights reserved &#169; 2006-2024 OLX</span>
           </div>
        </div>
        </>
    )
}
export default footer