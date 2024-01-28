import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../utils/Firebase";

const Login = () => {
  const[isSignInForm, setIsSignInForm] = useState(true)
  const[errorMessage, setErrorMessage] = useState(null)
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = ()=>{
    //validate the form data
    const message = checkValidateData(email.current.value,password.current.value)
    setErrorMessage(message)
    if(message) return;

    // SignIn / SignUp logic

    if(!isSignInForm){
      //signup logic
      createUserWithEmailAndPassword(
        auth, 
        email.current.value,
        password.current.value
        )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + errorMessage)
      });
    }
    else{
      //signin logic
      signInWithEmailAndPassword(
        auth, 
        email.current.value,
        password.current.value
        )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + errorMessage)
      });
    }
  }
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background-image"
        />
      </div>
      <form 
      onSubmit={(e)=> e.preventDefault()}
      className="w-3/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold my-3 text-3xl p-2">{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Enter Full Name"
          className="p-3 my-3 w-full bg-gray-700"
        />}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-3 my-3 w-full bg-gray-700"
        />
        <input 
          ref={password}
          type="text" 
          placeholder="Password" 
          className="p-3 my-3 w-full bg-gray-700" />
          <p className="text-red-600">{errorMessage}</p>
        <button className="p-3 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up"}</button>
        <p className="px-2 py-6 cursor-pointer underline" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign up now." : "Already a user? Sign In"}</p>
      </form>
    </>
  );
};

export default Login;
