import React, { useState, useEffect } from 'react'
import './Home.css'
import Feeds from '../../components/Feeds/Feeds'
import TweetBox from "../../components/Sidebar/TweetBox/TweetBox"
import SideNavbar from '../../components/Sidebar/sideNavbar'
import RigthSide from '../../components/RightSidebar/RigthSide'
import { useNavigate } from 'react-router-dom'

// import { isUserLoggedIn } from '../../atoms/isUserLoggedIn'
// import { useRecoilValue } from 'recoil'


export default function Home() {

  const [showHome, setShowHome] = useState(true)
  const navigate = useNavigate()

  // const userLoggedIn = useRecoilValue(isUserLoggedIn)


  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('isUserLoggedIn'))) {
      navigate('/login')
      // console.log("checking condition");
    }
  }, [])


  return (
    <div className='main_background' >
      <SideNavbar />
      {/* Home Pages  */}
      <div className='home_main_container'>

        {/* TOPBAR of Home page */}
        <section className='home_topbar_section'>
          <h2>Home</h2>
          <div className='home_topbar_innerDiv' >
            <div onClick={() => setShowHome(true)}  >
              <span style={{ borderBottom: showHome ? ' 4px solid rgb(29, 155, 240)' : '' }} >For you</span>
            </div>
            <div onClick={() => setShowHome(false)} >
              <span style={{ borderBottom: showHome ? '' : ' 4px solid rgb(29, 155, 240)' }}>Following</span>
            </div>
          </div>
        </section>

        {/* tweetbox coming form sidebar component */}
        <TweetBox />
        
        <Feeds show={showHome} />
      </div>
      <RigthSide />

    </div>
  )
}
