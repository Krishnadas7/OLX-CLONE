import React,{useState} from 'react'
import { useNavigate,NavLink } from 'react-router-dom'
import { auth,firestore } from '../../firebase/config'
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import '../Auth/both.css'
import {addDoc,collection} from 'firebase/firestore'

function Signup() {

 const [name,setName]=useState('')
 const [email,setEmail]=useState('')
 const [number,setNumber]=useState('')
 const [password,setPassword]=useState('')
 const navigate=useNavigate()


 const handleSubmit = async (e) => {
  e.preventDefault()
 
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user,{displayName:name}).then(()=>{
          const userCollection = collection(firestore,'users')
          addDoc(userCollection,{
            UserId:user.uid,
            name:name,
            number:number
          }).then(()=>{
            navigate("/login")
          })
        })
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
    });

  }
return (
  <>
    <div className='  main-Area '>

      <div class="card  col-md-3 col-10  box-area">
        <div class="card-body">
          <div className='d-flex flex-column align-items-center'>
            {/* <source type="image/webp" srcset="https://statics.olx.in/external/base/img/loginEntryPointPost.webp" /> */}
            <img src="https://statics.olx.in/external/base/img/loginEntryPointPost.png" className="topicon" alt="" />

            <p className='text-center icon-text'>Help us become one of the safest places to buy and sell</p>
          </div>
          <div className='input-area m-3'>
            <form >
              <input className='px-3 mt-2' name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='User Name' />
              <input className='px-3 mt-2' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' />
              <input className='px-3 mt-2' name='number' value={number} onChange={(e)=>setNumber(e.target.value)} type="number" placeholder='Mobile' />
              <input className='px-3 mt-2' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Password' />
              <button type='submit' onClick={handleSubmit} style={{backgroundColor:'rgb(0 47 52)'}} className='postBtn mt-2'>Create Account</button>
            </form>
          </div>
          <hr />
          <div>
            <p  className='text-center acText' ><a onClick={()=>{
              navigate('/login')
            }} href="">have an account already</a></p>
          </div>
        </div>
      </div>

    </div>
  </>
)
}

export default Signup