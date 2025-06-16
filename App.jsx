import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Merch from "./pages/Merch";
import Events from "./pages/Events";
import Artists from "./pages/Artists";
import Gallery from "./pages/Gallery";
import ScavengerHunt from "./pages/ScavengerHunt";





function MainLayout() {  


  return (
   
      <div className="overlay">
        <div className="max-width-container border">  
          <div className="max-width border">
            <Navbar />
          </div>             
        
      
            <main className="content">
              <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/merchandise" element={<Merch />} />
                <Route path="/events" element={<Events />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="scavenger-hunt" element={<ScavengerHunt />} />
              </Routes>
            </main>                  
      
        </div>
      </div>
      
   
  );
}

function App() {

  /* Note: Not sure if I am going to keep this toggle, however, if I do I want to make it a switch-- not a button -- and it will be 
  located inside the nave bar or right below it. Well circle back to this once I get the page layout setup
  */


  // const [useNightMode, setNightMode] = useState(false);

  // function toggleLabels() {
  //   setNightMode(!useNightMode);
  // }



  return (
    // <div className={useNightMode ? 'main-background-night' : 'main-background-day'}>
    //   <button onClick={toggleLabels}>Day VS Night</button>


      <BrowserRouter>
        <div className="section-grid border">
          <MainLayout />
        </div>
        
      </BrowserRouter>


    // </div>
  );
}




export default App;
