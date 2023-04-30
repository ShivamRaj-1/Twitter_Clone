import React, { useEffect, useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { FcGoogle, } from "react-icons/fc";
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider'
import Log from './Login.module.css'

export default function Login() {
  const [Logindata, setLogindata] = useState('');
  const [userList, setUserList] = useState([]);
  const [showdata, setShowdata] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const matchedUser = userList.find(user => user.loginData === Logindata);
    if (matchedUser) {
      alert("Login successful!")
    }
    else {
      alert("Invalid login data!");
    }
  }
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    setUserList(data);
  },[]);

  console.log(userList)

  return (
    <div className={Log.body1}>
      <div className={Log.main} >
        <div className={Log.container}>
          <img
            src='https://cdn.pixabay.com/photo/2014/04/03/11/53/twitter-312464_1280.png'
            alt=''
            width='40px'
          />
          {showdata == false ? (
            <>
              <h4>Sign in to Twitter</h4>
              <button className={Log.google}>
              <a href="https://www.google.co.in/" target="_blank">
              <FcGoogle size={20} color='yellow'/>Sign In with Google
              </a>
              </button>
              <br />
              <button className={Log.apple}>
                <FaApple size={20}/> Sign In with Apple
              </button>
                <p className={Log.para}> <Divider>or</Divider></p>
              <form onSubmit={handleSubmit} className={Log.Formfiled}>
                <input
                  type='text'
                  value={Logindata}
                  placeholder='Phone, email, or Username'
                  onChange={(e) => setLogindata(e.target.value)}
                /> 
                <br />
              </form>
              <button onClick={() => setShowdata(true)} className={Log.move}>Next</button>
              <br />
              <button className={Log.pass}>Forgot password?</button>
              <br />
            </>
          ) : (
            <>
              <h2 className={Log.heading}> Enter Your Paasword</h2>
              <TextField className={Log.email}
                disabled
                id='outlined-disabled'
                label='email'
                value={Logindata}
              />
              <br />
              <br />
              <TextField className={Log.anotherpaas}
                id='filled-password-input'
                label='Password'
                type='password'
                autoComplete='current-password'
                variant='outlined'
              />
              <br />
              <button className={Log.anotherPage}>Login</button>

            </>
          )}
          <br />
          <span className={Log.span1}>Do you have an account?  <span className={Log.span2}>Sign Up</span></span>
        </div>
      </div>
    </div>
  );
}
