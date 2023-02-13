import React from 'react'
import {Box, TextField , Button} from '@mui/material';
import "./Signup.css";
const Login = () => {
  return (
    <Box sx = {{ maxWidth:'100%',marginTop:'10px'}}>
        <div className='signupForm'>
        <form className = "form">
        <TextField   label="Name" id="fullWidth" className='inputFiled mt-3'/>
         <TextField label="Email" id="fullWidth" className='inputFiled mt-3'/>
         <TextField  label="Password" id="fullWidth" className='inputFiled mt-3'/>
         <Button variant = "contained" color="primary" className = "mt-3">Login</Button>
        </form>
        </div>
    </Box>
  )
}

export default Login