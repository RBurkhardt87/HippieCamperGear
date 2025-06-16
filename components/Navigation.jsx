import React from 'react'
import { Tabs, Tab, Box, Link, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import '../styling/Navigation.css';



const Navbar = () => {
   

    const location = useLocation(); 
    const path = location.pathname; 

    function getTab() {
        if (path === "/" || path === "/home") {
            return "one";
        }
        else if (path === "/about-us") {
            return "two"
        }
        else if (path === "/merchandise") {
            return "three";
        }
        else if (path === "/events") {
            return "four";
        }
        else if (path === "/artists" ) {
            return "five";
        }
        else if (path === "/gallery" ) {
            return "six";
        }
        else if (path === "/scavenger-hunt" ) {
            return "seven";
        }
    } 



  return (
    
        <div className="nav-bar">
            <Box sx={{
                        display: "flex",
                        justifyContent: "space-between", 
                        alignItems: "center", 
                        padding: "8px 20px",  
                        background: "gray"                                                           
                    }}
            >                
                {/* <Typography
                    variant="h6"
                    sx={{
                    color: "black",
                    fontWeight: "bold",
                    whiteSpace: "nowrap"
                    }}
                >
                    Hippie Camper Gear
                </Typography> */}
                
                <div className='HC-nav-logo-button border'>
                    
                </div>

                <Tabs
                    value={getTab()}
                    textColor="inherit"
                    TabIndicatorProps={{ style: { backgroundColor: "rgb(240, 63, 9)" } }}
                    variant="scrollable"
                    scrollButtons="on"
                    allowScrollButtonsMobile
                    sx={{
                        width: "100%",
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                        "& .MuiTabs-flexContainer": {
                        justifyContent: "flex-end", 
                        },
                        "@media (max-width: 768px)": {
                        "& .MuiTabs-flexContainer": {
                            justifyContent: "flex-start",
                        },
                        },
                    }}
                >
                    <Tab                         
                        value="one" 
                        label="Home" 
                        component={Link} 
                        href="/home" 
                        sx={{ 
                            color: "black", 
                            "&.Mui-selected": { 
                              color: "white",
                            }
                            }}
                    />
                    <Tab 
                        value="two" 
                        label="About Us" 
                        component={Link}
                        href="/about-us"
                        sx={{ 
                            color: "black", 
                            "&.Mui-selected": { 
                              color: "white",
                            }
                            }}
                    />
                    <Tab 
                        value="three" 
                        label="Merch" 
                        component={Link}
                        href="/merchandise"
                        sx={{ 
                            color: "black", 
                            "&.Mui-selected": { 
                              color: "white",
                            }
                            }} 
                    />
                    <Tab 
                        value="four" 
                        label="Events" 
                        component={Link}
                        href="/events"
                        sx={{ 
                            color: "black", 
                            "&.Mui-selected": { 
                              color: "white",
                            }
                            }}
                    />
                    <Tab 
                        value="five" 
                        label="Artists" 
                        component={Link}
                        href="/artists"
                        sx={{ 
                            color: "black", 
                            "&.Mui-selected": { 
                              color: "white",
                            }
                            }}
                    />
                    <Tab 
                        value="six" 
                        label="Gallery" 
                        component={Link}
                        href="/gallery"
                        sx={{ 
                            color: "black", 
                            "&.Mui-selected": { 
                              color: "white",
                            }
                            }}
                    />
                    <Tab 
                        value="seven" 
                        label="Scavenger Hunt" 
                        component={Link}
                        href="/scavenger-hunt"
                        sx={{ 
                            color: "black", 
                            "&.Mui-selected": { 
                              color: "white",
                            }
                            }}
                    />
                </Tabs>
            </Box> 
        </div>
      
      
    
  )
}

export default Navbar