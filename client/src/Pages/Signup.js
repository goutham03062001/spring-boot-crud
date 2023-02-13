import React,{useState} from 'react'
import {Box, TextField , Button} from '@mui/material';
import axios from 'axios';
import "./Signup.css";
const Signup = () => {
    var apiEndPoint = 'http://localhost:8080/user/addUser';
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password, setPassword] = useState('');
    const submitForm = (e)=>{
        e.preventDefault();
        console.log(name,email,password); 
        const data = {name,email,password}   
        axios.post(apiEndPoint,data);
        
    }
  return (
    <Box sx = {{ maxWidth:'100%',marginTop:'10px'}}>
        <div className='signupForm'>
        <form className = "form" onSubmit = {submitForm}>
        <TextField   label="Name" id="fullWidth" className='inputFiled mt-3' onChange = { (e)=>{setName(e.target.value)}}/>
         <TextField label="Email" id="fullWidth" className='inputFiled mt-3' onChange = { (e)=>{setEmail(e.target.value)}} />
         <TextField  label="Password" id="fullWidth" className='inputFiled mt-3' onChange = { (e)=>{setPassword(e.target.value)}}/>
         <Button variant = "contained" color="primary" className = "mt-3" type = "submit">Signup</Button>
        </form>
        </div>
    </Box>
  )
}

export default Signup