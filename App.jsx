import React from "react";
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
    <div className="main-background">
      <div className="overlay">
        <div className="wrapper">  
          <Navbar />
     
          
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
    </div>
  );
}

function App() {
  return (  
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
  );
}



export default App;
