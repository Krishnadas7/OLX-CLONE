import React,{useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth' 
import { auth } from '../../firebase/config'
import { NavLink, useNavigate } from 'react-router-dom'

import '../Auth/both.css'


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }
    return (
        <>
            <div className='  main-Area '>

                <div className="card  col-md-3 col-10  box-area">
                    <div className="card-body">
                        <div className='login-sym'>
                            {/* <source type="image/webp" srcset="https://statics.olx.in/external/base/img/loginEntryPointPost.webp" /> */}
                            <img src="https://statics.olx.in/external/base/img/loginEntryPointPost.png" className="topicon" alt="" />

                            <p className='text-center m-auto icon-text'>Help us become one of the safest places to buy and sell</p>
                        </div>
                        <div className='input-area m-3'>
                            <form >
                                <input className='px-3 mt-2' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' />
                                <input  className='px-3 mt-2' value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Password' />
                                <button type='submit ' onClick={onLogin} className='postBtn mt-2'>Sign in</button>
                            </form>
                        </div>
                            <p className='text-danger text-center'></p>
                        <hr />
                        <div>
                            <p  className='text-center acText' ><a onClick={()=>{
                                navigate('/signup')
                            }} href="">Create New ccount</a></p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login