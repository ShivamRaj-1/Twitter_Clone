import React, {useState} from 'react'
import './Home.css'
import Feeds from '../../components/Feeds/Feeds'
import TweetBox from "../../components/Sidebar/TweetBox"

export default function Home() {

  const [showHome, setShowHome] = useState(true)

  return (

    <div className='home_main_container'>

      {/* TOPBAR of Home page */}
      <section className='home_topbar_section'>
        <h2>Home</h2>
        <div className='home_topbar_innerDiv' >
          <div onClick={()=> setShowHome(true)}  ><span style={{ borderBottom: showHome ? ' 4px solid rgb(29, 155, 240)' : '' }} >For you</span></div>
          <div onClick={()=> setShowHome(false)} ><span style={{ borderBottom: showHome ? '' : ' 4px solid rgb(29, 155, 240)' }} >Following</span></div>
        </div>
      </section>
      <TweetBox />

      <Feeds show={showHome}/>


    </div>
  )
}
