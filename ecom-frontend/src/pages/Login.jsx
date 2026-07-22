import React, { useState } from "react";

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };
  return (

    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {/* If the state is 'Login', display nothing. Otherwise, show the Name input for Sign Up */}
      {currentState === 'Login' ? '' : (
        <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />
      )}

      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />

      <div className='flex justify-between w-full mt-[-8px] text-sm'>
        <p className='cursor-pointer border-b border-gray-600'>Forgot your password ?</p>
        {
          currentState === 'Login'
            ?
            <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer border-b border-gray-600'>Create An Account</p>
            :
            <p onClick={() => setCurrentState('Login')} className='cursor-pointer border-b border-gray-600'>Login Here</p>

        }

      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  );
};

export default Login;
