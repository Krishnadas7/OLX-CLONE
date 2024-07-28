import React,{useContext,useState} from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../../assets/olxLogo"
import LocationSearch from "../../assets/locSearch"
import '../Navbar/navbar.css'
import SearchBar from "../../assets/searchBar"
import { IoIosArrowDown } from "react-icons/io";
import SellButton from "../../assets/sellButton"
import { AuthContext } from "../../store/context"
import { onAuthStateChanged,signOut } from "firebase/auth"
import { auth } from "../../firebase/config"
function Navbar (){
    const {setUser } = useContext(AuthContext)
    const [logout, setLogout] = useState(false)

    const navigate=useNavigate()
    const handleLogout=()=>{
        signOut(auth).then(() => {
            setUser(null)
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
            console.error("not sign out")
        });
    }
const {user}=useContext(AuthContext)
    return(
        <>
        <div className="total-items">
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
                <div className="flex" style={{paddingRight:'39px'}}>
                <button
      className="login-button mx-4"
      onClick={() => {
        if (user) {
          // If the user is authenticated, handle logout
          handleLogout();
        } else {
          // If the user is not authenticated, navigate to the login page
          navigate('/login');
        }
      }}
    >
      {user ? (
        // If the user is authenticated, display user's name and provide logout option
        <>
          {user.displayName}
          <span className="ml-2" onClick={handleLogout}>
            Logout
          </span>
        </>
      ) : (
        // If the user is not authenticated, display "Login"
        'Login'
      )}
    </button>
                <SellButton/>
                </div>
            </div>

        </div>
        </div>
        
        
        </>
    )
}
export default Navbar