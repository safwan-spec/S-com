import React from 'react'
import Box from '@mui/material/Box';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Image from '../Images/scom.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';


function About() {
  return (
    <div>
      <h1 style={{textAlign:"center",fontSize:"50px",fontStyle:'oblique'}}>Why shop with us</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap',paddingLeft:'310px'}}>
      <Box
      
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' ,backgroundColor:'#a24320'}}

    ><LocalShippingIcon style={{color:'white'}}/>
      <h1 style={{color:'white',fontSize:"20px"}}>FAST DELIVERY</h1>
      <p></p>
    </Box>
    <Box
      height={200}
      width={200}
      marginLeft={5}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' ,backgroundColor:'#a24320'}}
    ><ShoppingBagIcon style={{color:'white'}}/>
      <h1 style={{color:'white', fontSize:"20px"}}>FREE SHIPING</h1>
    </Box>
    <Box
      height={200}
      width={200}
      margin={5}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey',backgroundColor:'#a24320' }}
    ><ThumbUpIcon style={{color:'white'}}/>
      <h1 style={{color:'white',fontSize:"20px"}}>BEST QUALITY</h1>
    </Box>
    </div>
    <img src={Image} width="100%" height="280"/>
    <Box
      height={300}
      width={1450}
    
      sx={{ backgroundColor:'#4a1c0b' }}
      
    >
    <p style={{paddingTop:'20px',paddingLeft:'20px',fontSize:'24px',color:'white',fontStyle:'oblique'}}><b>Reach at...</b></p>
    <p style={{fontSize:'18px',color:'white'}}>  <LocationOnIcon style={{color:'white',paddingLeft:'20px'}} /> Location</p>
    
    <p style={{fontSize:'18px',color:'white'}}>  <CallIcon style={{color:'white',paddingLeft:'20px'}} /> Call +01 8989076</p>
    <p style={{fontSize:'18px',color:'white'}}>  <EmailIcon style={{color:'white',paddingLeft:'20px'}} /> demo@gmail.com</p>
    <br />

    <p style={{textAlign:"center",fontSize:"17px",color:'white'}}>© 2024 All Rights Reserved By s-com 
    Distributed By Safwancollections</p>
    </Box>
    </div>
  )
}

export default About
