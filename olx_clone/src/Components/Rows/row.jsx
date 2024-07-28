import React,{useState,useContext,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../../store/postContext';
import { firestore } from '../../firebase/config';
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import image from '../../assets/image.jpg'
import footerimage from '../../assets/footer-image.png'
import '../Rows/row.css'
import { IoMdHeartEmpty } from "react-icons/io";

function row (){
    const [products, setProducts] = useState([]);
  const { setPostDetails } = useContext(PostContext);
  const navigate=useNavigate()
  useEffect(() => {
    getDocs(collection(firestore, "products"))
      .then((querySnapshot) => {
        const allProducts = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(allProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  const handleClick=(product)=>{
    setPostDetails(product)

    navigate('/productview',{state:{product}})
  }
    return(
        <>
         <div className="row-body">
            <p className='row-title ' >Fresh Recomandations</p>
                <div className='grid grid-cols-4'>

             {
                products.map((product)=>{
                    return(
                       
                          <div onClick={()=>handleClick(product)} className="product-details ">
            <IoMdHeartEmpty className='wishlist-icon'/>
               <img className='product-image' src={product.url} alt="" />
               <span className='pl-2'><b>&#8377;{product.price}</b></span>
               <p className='product-name pl-2'>{product.title}</p>
               <div className="date-location flex p-2">
               <span>{product.location}</span>
               <span >{product.createdAt}</span>
               </div>
            </div>
                        
                    )
                })
             }
            
            </div>
           
            
         </div>
         <div className='footer-image' >
            <img style={{width:'100%'}} src={footerimage} alt="" />
            </div>
        </>
    )
}
export default row