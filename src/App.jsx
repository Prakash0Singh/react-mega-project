import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import authService from './appwrite/auth';
import {login, logout} from "./store/authSlice"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import { Outlet } from "react-router-dom";
import video from '../public/assets/video/earth-rotation.mp4';

function App() {
  const [loading,setLoading]=useState(false);
  const dispatch=useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .catch((error)=>{console.error("ERROR- ",error)})
    .finally(()=>setLoading(false))
  },[])

  return !loading?(
  <>
    {/* <div className="min-vh-100 d-flex flex-wrap justify-content-between ">
      <div className="w-100 d-block">
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div> 
    */}
    <Header />
    <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
        <div className="container">
          <div className="row">
          <Outlet />
          </div>
        </div>

        <div className="video-wrap">
          <video autoPlay loop muted className="custom-video" poster="">
            <source src='/assets/video/earth-rotation.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

  </>
  ):(null)
}

export default App
