import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/UserSlice';
import { logo } from '../utils/Constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = ()=>{
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      navigate("/error")
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in/ signed up
        const {uid,email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
        navigate("/browse")
      } 
      else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  },[])

  return (
    <>
    <div className='absolute w-full py-2 px-8 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
      className='w-44'
      src= {logo}
      alt="logo" />
    
    {user && <div className='flex p-2'>
      <button onClick={handleSignOut} className='text-white font-white p-2 bg-red-700 rounded-md m-2'>Sign Out</button>
      <img 
      className='w-12 h-12 rounded-full m-2'
      src={user?.photoURL} 
      alt="Picture" />
    </div>}
    </div>
    </> 
  )
}

export default Header
