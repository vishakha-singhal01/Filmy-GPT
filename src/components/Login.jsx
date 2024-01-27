import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const[isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
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
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold my-3 text-3xl p-2">{isSignInForm? "Sign In" : "Sign Out"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Enter Full Name"
          className="p-3 my-3 w-full bg-gray-700"
        />}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-3 my-3 w-full bg-gray-700"
        />
        <input 
        type="text" 
        placeholder="Password" 
        className="p-3 my-3 w-full bg-gray-700" />
        <button className="p-3 my-6 bg-red-700 w-full rounded-lg">{isSignInForm? "Sign In" : "Sign Out"}</button>
        <p className="px-2 py-6 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign up now." : "Already a user. Sign In"}</p>
      </form>
    </>
  );
};

export default Login;
