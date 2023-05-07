import React, { useEffect, useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { FcGoogle, } from "react-icons/fc";
import TextField from '@mui/material/TextField';
import Log from './Login.module.css'
import Divider from '@mui/material/Divider';
import { Link, useNavigate } from 'react-router-dom';

// import { isUserLoggedIn } from '../../atoms/isUserLoggedIn'
// import { useSetRecoilState } from 'recoil'

export default function Login() {
  const [Logindata, setLogindata] = useState('');
  const [userPass, setUserPass] = useState('')
  const [userList, setUserList] = useState([]);
  const [showdata, setShowdata] = useState(false);
  const navigate = useNavigate()

  // const setUserLoggedIn = useSetRecoilState(isUserLoggedIn)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'));
    setUserList(data);
    localStorage.setItem('isUserLoggedIn', JSON.stringify(false))
  }, []);

  console.log(userList)

  function handleEmailSubmit(e) {
    e.preventDefault();
    // add relevant code here
    const matchedUserEmail = userList.find(user => user.email === Logindata)
    if (!matchedUserEmail) {
      alert('email not registered.')
    }
    else {
      setShowdata(true)
    }
  }
  function handlePassSubmit(e) {
    e.preventDefault();
    const matchedUserPass = userList.find(user => user.password === userPass)
    if (!matchedUserPass) {
      alert('Password not matched!')
    }
    else {
      // setShowdata(true)
      alert("login successfull!")
      // setUserLoggedIn(true)
      localStorage.setItem('isUserLoggedIn', JSON.stringify(true)) 

      const curUser = JSON.parse(localStorage.getItem('userData')).filter(user => user.email === Logindata);
      localStorage.setItem('currentUser', JSON.stringify(...curUser));
      // console.log(curUser);
      navigate('/')
    }

  }

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
                <FcGoogle size={25} color='yellow' />Sign In with Google
              </button>
              <br />
              <button className={Log.apple}>
                <FaApple size={25} /> Sign In with Apple
              </button>
              <br />
              <p className={Log.para}>__________________or_________________</p>
              {/* <Divider>or</Divider> */}
              <br />
              <form onSubmit={handleEmailSubmit} className={Log.Formfiled}>
                <input
                  type='text'
                  value={Logindata}
                  placeholder='Phone, email, or Username'
                  onChange={(e) => setLogindata(e.target.value)} className={Log.text}
                />
                <br />
                <button type='submit' className={Log.move}>Next</button>
                <br />
              </form>
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
              <form onSubmit={handlePassSubmit} className={Log.Formfiled}>
                <TextField className={Log.anotherpaas}
                  id='filled-password-input'
                  label='Password'
                  type='password'
                  autoComplete='current-password'
                  variant='outlined'
                  value={userPass}
                  onChange={(e)=> setUserPass(e.target.value)}
                />
                <br />
                <button type='submit' className={Log.anotherPage}>Login</button>
              </form>

            </>
          )}
          <br />
          <Link to='/signup'><span className={Log.span1}>Do you have an account? Sign Up</span></Link>
        </div>
      </div>
    </div>
  );
}
