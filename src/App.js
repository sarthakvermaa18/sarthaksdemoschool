import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './componenets/Footer'
import Home from './componenets/Home'
import OnlineFees from './componenets/OnlineFees'
import FeesStructure from './componenets/FeesStructure'
import AboutUs from './componenets/About-us-inside/AboutUs'
import Infastructe from './componenets/Campus/Infastructe'
import Facility from './componenets/Facilities/Facility'
import Sport from './componenets/Sports/Sport'
import MissionVision from './componenets/About-us-inside/MissionVision'
import PrincipalMsg from './componenets/About-us-inside/PrincipalMsg'
import Navbar from './componenets/Navbar'
import Ourclasses from './componenets/Ourclasses'
import Schoolteachers from './componenets/Schoolteachers'
import High_school_Training from './componenets/ClassesNavbar/High_school_Training'
import Middle_school_training from './componenets/ClassesNavbar/Middle_school_training'
import Primary_School_Teaching from './componenets/ClassesNavbar/Primary_School_Teaching'
import Events from './componenets/Events/Events'
import Contact from './componenets/Contact'
import Staff from './componenets/Staff'
import Gallery from './componenets/Gallery'
import { CirclesWithBar } from 'react-loader-spinner'
import Admission_Procedure from './componenets/Admission-Procedure'
const App = () => {
  const [load, setLoad] = useState(false);

  const loader = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f0f0f0',

  };
  useEffect(() => {
    const delay = 3000;
    const timeoutId = setTimeout(() => {
      setLoad(true);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (

    <BrowserRouter>
      {load ?
        <div>
          <Routes>
            <Route exact  path='/' element={<Home />} />
            <Route exact  path='/about-us' element={<AboutUs />} />
            {/* ________________Abouts__________________ */}
            <Route exact path='/about-us' element={<AboutUs />} />
            <Route exact path='/mission-vision' element={<MissionVision />} />
            <Route exact path='/principals-massage' element={<PrincipalMsg />} />
            <Route exact path='/admisson-procedure' element={<Admission_Procedure/>} />
            {/* ________________Gallery__________________ */}
            <Route exact path='/enviroment-day' element={<Gallery data1="enviroment-day" />} />
            <Route exact path='/workshops-students' element={<Gallery data1="workshops-students" />} />
            <Route exact path='/childrens-day' element={<Gallery data1="childrens-day" />} />
            <Route exact path='/independence-day' element={<Gallery data1="independence-day" />} />
            <Route exact path='/celebration' element={<Gallery data1="celebration" />} />
            <Route exact path='/teachers-day' element={<Gallery data1="teachers-day" />} />
            <Route exact path='/farewell' element={<Gallery data1="farewell" />} />
            <Route exact path='/talent-show' element={<Gallery data1="talent-show" />} />

            {/* ________________Campus__________________ */}
            <Route exact path='/infastructe' element={<Infastructe />} />
            <Route exact path='/facility' element={<Facility />} />
            <Route exact path='/sport' element={<Sport />} />
            {/* ________________event__________________ */}
            <Route exact path='/events' element={<Events />} />
            {/* ________________Contact __________________ */}
            <Route exact path='/contacts' element={<Contact />} />


            {/* ________________training-staff__________________ */}
            <Route exact path='/high-training-staff' element={<High_school_Training />} />
            <Route exact path='/middle-school-training' element={<Middle_school_training />} />
            <Route exact path='/primary-school-teaching' element={<Primary_School_Teaching />} />

            {/* ________________Fees__________________ */}
            <Route exact path='/fees-instructions' element={<FeesStructure />} />
            <Route exact path='/online-fees-payment' element={<OnlineFees />} />
            {/* ________________footer componenets__________________ */}
            <Route exact path='/ourclasses' element={<Ourclasses />} />
            <Route exact path='//schoolteachers' element={<Schoolteachers />} />


          </Routes>
          <Footer />
        </div>
        : (
          <div style={loader}>
            <CirclesWithBar
              height="240"
              width="380"
              color="#ffca28"
              outerCircleColor="light"
              innerCircleColor="light"
              barColor="#ffca28"
              ariaLabel="circles-with-bar-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>)
      }
    </BrowserRouter>
  )
}

export default App