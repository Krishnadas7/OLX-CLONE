import React,{useContext,useEffect} from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Login from "./Components/Auth/login"
import Signup from "./Components/Auth/signup"
import SellingPage from "./Pages/sellingPage"
import { AuthContext } from "./store/context"
import { onAuthStateChanged } from "firebase/auth"
// import SinglePost from "./Pages/singlePost"
// import Sell from "./Components/Sell/sell"
import Home from "./Pages/home"
import ProductContent from "./Pages/productView"
import { auth } from "./firebase/config"
import PostView from "./store/postContext"
function App() {
  const {setUser} = useContext(AuthContext)
  useEffect(()=>{            
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })
  })
    
  return (
    <>
    <PostView>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/sell" element={<SellingPage/>}/>
         <Route path="/productview" element={<ProductContent/>}/>
       </Routes>
     </BrowserRouter>
     </PostView>
     {/* <ProductContent/> */}
    </>
  )
}

export default App
