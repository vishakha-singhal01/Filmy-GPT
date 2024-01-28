import { signOut } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    <>
    <div className='absolute w-full py-2 px-8 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
      className='w-44'
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
    
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
