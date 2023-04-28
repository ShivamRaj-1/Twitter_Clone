
import React from 'react'
import './App.css'
import SideNavbar from './components/Sidebar/sideNavbar'


// import Feed from './components/Sidebar/Feed'

// import Landing, { LandingFooter } from './pages/Landing/Landing'
// import Login from './pages/Login/Login'

// import SignUp from './pages/SignUp/SignUp'
import RigthSide from './components/RightSidebar/RigthSide';
import Home from './pages/Home/Home'

function App() {

  return (

    <>

      <div className='main_background' >
        <SideNavbar />
        <Home />
        <RigthSide />

        {/* <Landing /> */}
        {/* <Login /> */}


        {/* <Login />
        <SideNavbar /> */}

        {/* <SignUp /> */}
      </div>
      {/* <LandingFooter /> */}



    </>
  );

}

export default App;
