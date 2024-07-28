import React,{useState,useContext,useEffect} from 'react'
import { firestore,storage } from '../../firebase/config'
import { AuthContext } from '../../store/context'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import '../Sell/sell.css'

function Sell() {
    const [brand,setBrand]=useState('')
    const [title,setTitle]=useState('')
    const [description,setDescrition]=useState('')
    const [price,setPrice]=useState('')
    const [image,setImage]=useState(null)
    const [location,setLocation]=useState('')
    const {user} = useContext(AuthContext)
    const navigate=useNavigate()
    const submitHandler = (e) => {
       e.preventDefault()
    const storageRef = ref(storage, `/images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (error) => {
          alert("Error uploading image: " + error.message);
        },
        () => {
         
          getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {
              
              const productsCollection = collection(firestore, "products");
              addDoc(productsCollection, {
                brand,
                title,
                description,
                price,
                url,
                location,
                id: user.uid,
                createdAt: new Date().toDateString(),
              })
                .then(() => {
                  navigate("/");
                })
                .catch((error) => {
                  alert("Error adding product to Firestore: " + error.message);
                });
            })
            .catch((error) => {
              alert("Error getting download URL: " + error.message);
            });
              }
    )
            }
   
    return (
        <div className='sellPage m-auto'>
            <div className="container flex  justify-content-center">
                <div className="box p-4 mt-4 col-md-8 col-12 mb-2 mx-auto">
                    <h2>Product Details</h2>
                    <hr />
                    <div className="input-area col-md-8 col-12" >
                        <h2>INCLUDE SOME DETAILS</h2>
                        <form >
                            <label htmlFor="" className='mt-2'>Brand *</label>
                            <input value={brand} name='brand' onChange={(e)=>setBrand(e.target.value)} type="text" />
                            <label htmlFor="" className='mt-2'>Ad title *</label>
                            <input value={title} name='title' onChange={(e)=>setTitle(e.target.value)}  type="text" />
                            <div className='d-flex flex-column'>
                                <label htmlFor=""  className='mt-2'>Description *</label>
                                <textarea  value={description} onChange={(e)=>setDescrition(e.target.value)} className='mt-2' name="description" id="" cols="30" rows="6"></textarea>
                            </div>
                            <hr />
                            <label htmlFor="" className='mt-2'>SET A PRICE</label>
                            <input name='price' value={price} onChange={(e)=>setPrice(e.target.value)} type="number" />
                            <hr />
                                <label htmlFor="formFile" className="form-label">UPLOAD IMAGE</label>
                            <div className="mb-3 col-12 row">
                                <div className='imgInput  col-4'>
                                <img
          alt="Posts"
          width="200px"
          height="200px"
          src={
            image
              ? URL.createObjectURL(image)
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9W-4C8o3gRqwN270j6o_BoQCDeOLUOtyWZ0PisH2l2Z_Z6YDyoHUjzhYft5bkdkEirg&usqp=CAU"
          }
        ></img>
                                    <input name='image' onChange={(e) => setImage(e.target.files[0])} type="file" />
                                </div>
                               
                            </div>
                            

                            <hr />
                            <label htmlFor="" className='mt-2'> LOCATION</label>
                            <input name='location' value={location} onChange={(e)=>setLocation(e.target.value)} type="text"  />
                            <hr />
                            <button  onClick={submitHandler} className='postBTN'>Post</button>
                            <p className='text-danger'></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sell