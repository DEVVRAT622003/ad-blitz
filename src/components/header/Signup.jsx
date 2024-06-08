import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {auth , googleProvider , fireDB} from '../../Firebase/config';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import toast from "react-hot-toast";
import { UserContext } from '../../Contexts/userContext';
import { Timestamp, addDoc, collection } from "firebase/firestore";

function Signup() {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError ] = useState(false);
    const navigate = useNavigate(); 

    // **Sign in with email function**
    const handleSignUp = async()=>{
        if(email === "" || password === ""){
            setError(true);
        }
        try {
            const userCredential  = await  createUserWithEmailAndPassword(auth , email , password);
            console.log(userCredential);
            const user = {
                name : userCredential.user.displayName ,
                email : userCredential.user.email , 
                uid : userCredential.user.uid ,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }
            // create user Refernce
            const userReference = collection(fireDB , "user");
            // Add User Details
            addDoc(userReference, user);

            setEmail('');
            setPassword('');

            toast.success('Signup Successful');

            navigate('/login'); 
                     
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    }

    // **Sign in with google function**
    const handleGoogleSignUp = async()=>{
        try {
            const userCredential = await signInWithPopup(auth , googleProvider);
            console.log(userCredential);
            const user = {
                name : userCredential.user.displayName ,
                email : userCredential.user.email , 
                uid : userCredential.user.uid ,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }
            // create user Refernce
            const userReference = collection(fireDB , "user");
            // Add User Details
            addDoc(userReference, user);
            toast.success('Signup Successfull')

            navigate('/login');
            
        } catch (error) {
            console.error('Error signing up:', error.message);
            
        }

    }
   
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>
                <div className=' flex justify-center mb-3 flex-col gap-2'>
                    <button
                        className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'
                        onClick={handleSignUp}>
                        Signup with Email
                    </button>
                    {error? <p className='text-red-700 text-sm text-center'>*Incorrect id or password*</p> : null}
                    
                    <button
                        className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'
                        onClick={handleGoogleSignUp}>
                        Signup with Google
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Already have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup