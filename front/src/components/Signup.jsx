import { TextField, Typography,Grid, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const navigate = useNavigate()
    const [inputs,setInputs]=useState({})
    const inputhandler=(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log(inputs)
    }
    const submithandler=()=>{
        console.log("btn click",inputs)
        axios.post("http://localhost:3008/api/post",inputs)
        .then((res)=>{
            console.log(res)
            alert(res.data.message);
            navigate('/')
        })
    }
  return (
    <div style={{margin:'8%'}}>
        <Typography variant='h4' style={{color:"purple"}}>
            signup form
        </Typography>
        <br/><br/>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
                <TextField variant='outlined' label="Name" fullWidth
                name='name' onChange={inputhandler}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField variant='outlined' label="E-mail" fullWidth
                 name='email' onChange={inputhandler}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField variant='outlined' label="address" fullWidth
                 name='address' onChange={inputhandler}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField variant='outlined' label="username" fullWidth
                name='Username' onChange={inputhandler}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField variant='outlined' label="password" fullWidth
                name='password' onChange={inputhandler}/>
            </Grid>
            
            <Grid item xs={12} sm={12} md={12}>
                <Button variant='contained' color='secondary' onClick={submithandler}>submit</Button></Grid>
                <Grid itemxs={12} sm={12} md={12}>
                <Link to={'/'}>Back to login</Link>
                </Grid>
        </Grid>
     
    </div>
  )
}

export default Signup
