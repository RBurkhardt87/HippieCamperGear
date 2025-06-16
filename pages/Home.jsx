
import React, { useState } from 'react';
import '../App.css';
import '../styling/Home.css';


const Home = () => {



  return (
    <>
        <section className="site-hero max-width-container border">
            <div className="section-grid max-width border">
              <div className='site-hero__image border'>
                <div className='site-hero__container border'>
                  <div className='site-hero__shadow-box border'>
                    <h1 className="site-hero__heading border">Hippie Camper Gear Home Page</h1>
                    <p className="site-hero__slogan border">"Hippie Camper Slogan Insert Here"</p>   
                  </div>             
                  <button className='site-hero__button border'>Shop Now</button>
                </div>             
              </div>

              <section className="home-about max-width-container border">
                <div className="section-grid max-width border">
                  <div className='home-discovery-cards__container border'>
                    <div className='home-discover-cards__card border'>
                      <h3 className='home-discover-cards__card-heading border'>Collaborative Artists</h3>
                      <p className='home-discover-cards__card-description border'>
                        Give short description of our collaboration with local artist. Maybe projects they work on for us
                      </p>
                      <button className='home-discover-cards__card-button border'>Learn More</button>
                    </div>
                    <div className='home-discover-cards__card border'>
                      <h3 className='home-discover-cards__card-heading border'>Who is Hippie Camper</h3>
                      <p className='home-discover-cards__card-description border'>
                        Give short description of our company and what we stand for or the people we want to reach
                      </p>
                      <button className='home-discover-cards__card-button border'>Learn More</button>
                    </div>
                    <div className='home-discover-cards__card border'>
                      <h3 className='home-discover-cards__card-heading border'>Find Hippie Camper</h3>
                      <p className='home-discover-cards__card-description border'>
                        Give short description of our our customers can find us... so through different festivals, local popups, w/ certain bands
                      </p>
                      <button className='home-discover-cards__card-button border'>Learn More</button>
                    </div>
                  </div>      
                </div>
              </section>

                </div>
          </section>



    </>


  )
}

export default Home

// The discovery-cards will be a component and we will be abe to map through Them. For now, I am just practicing with setting up a layout