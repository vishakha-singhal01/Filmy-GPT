import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import Login from './Login'
import Browse from './Browse'
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    }
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in/ signed up
        const {uid,email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
      } else {
        // User is signed out
        dispatch(removeUser())
      }
    });
  },[])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
