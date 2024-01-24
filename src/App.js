import React, { useEffect, useState } from "react";
import FetchDetails from "./Components/HomePage/FetchDetails";
import LoadingAnimation from "./Components/HomePage/LoadingAnimation";
import DisplayPlaces from "./Components/HomePage/DisplayPlaces";
import SinglePlace from "./Components/HomePage/SinglePlace.js";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import About from "./Components/Navbar/About";
import Explore from "./Components/Navbar/Explore";
import Help from "./Components/Navbar/Help";
import Profile from "./Components/Navbar/Profile";
import Footer from "./Components/Footer/Footer";

const App=()=>{
  const [places,setPlaces]=useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const homeElements=[
  <FetchDetails setPlaces={setPlaces} setIsAnimating={setIsAnimating}/>,
  <LoadingAnimation isAnimating={isAnimating}/>,
  <DisplayPlaces places={places}/>
 ]
  return (<div className="app">
    <Nav/>
    <Routes>
      <Route path="/" element={homeElements} />
      <Route path="/about" element={<About/>} />
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/help" element={<Help/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/item/:id" element={<SinglePlace places={places}/>} />
    </Routes>
    <Footer/>
  </div>)
}

export default App;