import { useState , useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {auth , fireDB, googleProvider} from '../../Firebase/config';
import { signInWithEmailAndPassword , signInWithPopup } from 'firebase/auth';
import { UserContext } from '../../Contexts/userContext';
import { collection, onSnapshot, query,where } from 'firebase/firestore';
import toast from 'react-hot-toast';

function Login() {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError ] = useState(false);
    const { isLoggedIn, setIsLoggedIn} = useContext(UserContext);
    const navigate = useNavigate(); 
    
    // **Login with email function**
    const handleLogIn = async()=>{
        if(email === "" || password === ""){
            setError(true);
        }
        try {
            const userCredential = await signInWithEmailAndPassword(auth , email , password);
            console.log(userCredential);
            try {
                const  q = query(
                    collection(fireDB, "user"),
                    where('uid' , '==' , userCredential?.user?.uid )
                );
                const data = onSnapshot( q , (QuerySnapshot)=>{
                    let user;
                    QuerySnapshot.forEach((doc)=> user=doc.data());
                    localStorage.setItem("users" , JSON.stringify(user))
                    setEmail('');
                    setPassword('');
                    setIsLoggedIn(true);
                    toast.success("Login Successful");
                    navigate('/');
                });
                return ()=>data;
                
            } catch (error) {
                console.log(error);
            }
           
            
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    }

    // **Login with Google function**
    const handleGoogleLogIn = async()=>{
        try {
            const userCredential = await signInWithPopup(auth , googleProvider);
            console.log(userCredential);
            try {
                const  q = query(
                    collection(fireDB, "user"),
                    where('uid' , '==' , userCredential?.user?.uid )
                );
                const data = onSnapshot( q , (QuerySnapshot)=>{
                    let user;
                    QuerySnapshot.forEach((doc)=> user=doc.data());
                    localStorage.setItem("users" , JSON.stringify(user))
                    setEmail('');
                    setPassword('');
                    setIsLoggedIn(true);
                    toast.success("Login Successful");
                    navigate('/');
                });
                return ()=>data;
                
            } catch (error) {
                console.log(error);
            }
            
        } catch (error) {
            console.error('Error signing up:', error.message);
        }

    }

   
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
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
                <div className='  flex justify-center mb-3 flex-col gap-2'>
                    <button
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'
                        onClick={handleLogIn}>
                        Login with Email
                    </button>
                    {error? <p className='text-red-700 text-sm text-center'>*Incorrect id or password*</p> : null}

                    <button
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'
                        onClick={handleGoogleLogIn}>
                        Login with Google
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login