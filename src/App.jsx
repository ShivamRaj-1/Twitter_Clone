
import './App.css'
import Landing, { LandingFooter } from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import SideNavbar from "./components/Sidebar/Components/sideNavbar";
import SignUp from './pages/SignUp/SignUp'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='main_background'>
        <Routes>
          <Route path='/'element={<SignUp />}/>
          <Route path='/Login' element={ <Login />}/>
          <Route path='/SideNavbar' element={ <SideNavbar/>}/>
          <Route path='/Landing'element={ <Landing />}/>
          <Route path='/LandingFooter ' element={ <LandingFooter />}/>
        </Routes>
      </div>

    </>
  );
}

export default App;
