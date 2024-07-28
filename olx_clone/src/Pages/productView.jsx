import React,{useState,useContext,useEffect} from 'react'
import { PostContext } from '../store/postContext';
import { firestore } from '../firebase/config';
import { collection, getDocs, where, query } from "firebase/firestore";
import { useNavigate,useLocation } from 'react-router-dom';


import { AiOutlineShareAlt } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import avtar from '../assets/avatar.avif'
import { IoIosArrowForward } from "react-icons/io";
import Navbar from '../Components/Navbar/navbar';
import Categories from '../Components/Categories/categories';
import { FirebaseContext } from '../store/context';


function ProductContent() {
  const {state}=useLocation()
     const {product}= state
     const postDetails=product
  const {db}=useContext(FirebaseContext)
  const [sellerDetails, setSellerDetails]=useState()

  // useEffect(()=>{
      
  // const productsCollectionRef=query(collection(firestore,'users'),where('userId','==',postDetails.useruId))
  //   const getSeller=async()=>{
  //     try {
  //         const snapshot=await getDocs(productsCollectionRef)
  //         const docs=snapshot.docs
          
  //         docs.forEach((doc)=>{
  //             const data=doc.data()
  //             console.log(data);
  //             setSellerDetails(data)
  //         })
          
  //     } catch (error) {
  //         console.log(error);
  //     }

  //   }

  //   getSeller()
  // },[])
  return (
    <>
    <Navbar/>
    <Categories/>
    {/* <div className='h-[69px] w-full'></div> */}
    <div className='w-full py-4 xl:h-[750px] h-[1300px] grid xl:flex justify-center bg-gray-100'>
      <div className='imagediv lg:w-[830px] w-full   h-[670px] rounded-md'>
        <img style={{width:'738px'}} className='h-[450px] max-lg:w-full rounded-md bg-black' src={postDetails.url} alt="" />
        {/* <img
  className='h-[450px] max-lg:w-full rounded-md'
  src={postDetails.url}
  alt=""
  onError={(e) => console.error("Image loading error:", e)}
/> */}
{console.log('fgr',postDetails)}


        <div className='description rounded-md   mt-1 p-4 h-[280px] bg-white xl:h-[230px] border'>
          <div className='text-xl font-bold'>{postDetails.title}</div>
          <div className='text-md py-3 lg:w-[50%] w-[100%]'><span className='text-gray-500'>{postDetails.brand}</span><span className='float-right'>samsung</span></div>
          <hr className='text-gray-500 mt-2'/>
          <div className='text-xl font-bold mt-4'></div>
          <div className='text-md py-3 '>{postDetails.description}</div>
        </div>
      </div>
      <div className=' xl:ml-4 xl:w-[400px]  h-[400px] rounded-md max-sm:w-full'>
        <div className=' h-[160px] border bg-white  rounded-md p-3'>
          <div className='font-bold text-3xl'>
            <span>&#8377; {postDetails.price}</span>
            <span className='float-end flex'>
              <AiOutlineShareAlt size={24}/>
              <IoMdHeartEmpty size={24} className='ml-2'/>
            </span>
          </div>
          {/* <div className='text-gray-600 mt-4'>onefjdfldlfldfdfldfdf</div> */}
          <div className='text-xs mt-8'><span>{postDetails.location}</span> <span className='float-right ml-1'>{postDetails.createdAt}</span></div>
        </div>
        <div className='h-[160px]  border bg-white   rounded-md mt-4  flex flex-col justify-between p-4'>
        <div className='flex items-center'>
          <img className='w-[60px] rounded-[100px]' src={avtar} alt="" />
          {/* <span className='ml-2 font-bold'>{sellerDetails.name}</span> */}
          <span className='text-black ml-[230px]'><IoIosArrowForward /></span>

        </div>
        <div className='px-2 py-2 border border-black cursor-pointer flex justify-center font-bold mt-1 rounded-md'>Chat with Seller</div>
        </div>



        <div className=' h-[100px] border bg-white   rounded-md mt-4  p-4'>
        <div className='font-bold text-2xl'>
            <span>Posted In</span>
            
          </div>
          <div className='text-xs mt-4'><span>{postDetails.createdAt}</span> <span className='float-right'>{postDetails.createdAt}</span></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductContent