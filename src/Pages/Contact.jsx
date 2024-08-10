import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CableIcon from '@mui/icons-material/Cable';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailIcon from '@mui/icons-material/Mail';

function Contact() {

  const ariaLabel = { 'aria-label': 'description' };
  return (
    
    <div>
      <h1 style={{ color: 'brown', fontSize: '30px' }} > <CableIcon/> Contact Us:</h1>

      
      
      <p style={{ color: 'black', fontSize: '16px' }}><HomeWorkIcon/>Kankanady,Mangalore</p>
      
      
      
      <p style={{ color: 'black', fontSize: '16px' }}><PhoneAndroidIcon/>+010 890 89076</p>
      
      <p style={{ color: 'black', fontSize: '16px' }}><MailIcon/>info@gmail.com</p>
      <Box
      component="form"
      sx={{ 
        '& > :not(style)': { m: 1, width: '55ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Your Name" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="Your Email" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="Your Subject" variant="outlined" />
      <br />

      <TextField id="outlined-basic" label="Your Message" variant="outlined" />
    </Box>
    
    <Stack spacing={5} direction="row" >
    <Button variant="contained" >Send Message</Button>
    </Stack>
    </div>
  )
}

export default Contact
