import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [inputs,setinputs]=useState({})
    const navigate=useNavigate();

    const inputHandler=(e)=>{
        setinputs({...inputs,[e.target.name]:e.target.value});
        console.log(inputs)
    }
    const submithandler=()=>{
        console.log("btn click",inputs)
        axios.post("http://localhost:3008/api/login",inputs)
        .then((res)=>{
            console.log(res)
            console.log(res.data.person)
            alert(res.data.message) 
            if(res.data.message==="logged in succesfully"){
                const userId=res.data.person._id;
                sessionStorage.setItem("Id",userId)
                navigate('/view')
            }
        })
    }
  return (
    <div>
     <Typography variant='h3' style={{color:'purple'}}>
        Login form
     </Typography>
     <br/><br/>
     <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined' label='username' onChange={inputHandler} name='Username'/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined' label='password' onChange={inputHandler} name='password'/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Button variant='contained' color='secondary' onClick={submithandler}>Login</Button>
     </Grid>
     <Grid item xs={12} sm={12} md={12}>
        <Link to={'/sign'}>NEW USERS CLICK HERE</Link>
     </Grid>
     </Grid>
    </div>
  )
}

export default Login
