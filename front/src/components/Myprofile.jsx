import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const Myprofile = () => {
    const[userId,setUserId]=useState(sessionStorage.getItem("Id"))
    const [myData,setMyData]=useState([])
    useEffect(()=>{
        console.log(userId)
        axios.get("http://localhost:3008/api/viewmypro/"+userId)
        .then((res)=>{
            console.log(res.data)
            setMyData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    
    <div style={{margin:"10%"}}> 
    <Grid container spacing={2}>
    <Grid item xs={12} sm={4} md={5}></Grid>
        {myData.map((val,i)=>{
           return(
            <Grid item xs={12} sm={4} md={4} key={i}>
                 <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h5' gutterBottom>
            Name:{val.name}
        </Typography>
        <Typography variant="h5" component="div">
        address:{val.address}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h5" >
        email:{val.email}
        </Typography>
        <Typography variant="h5">
        username:{val.Username}
        </Typography>
        10
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

             </Grid>
           )
       
      })}
       <Grid item xs={12} sm={4} md={5}></Grid>
     </Grid>
    </div>
  )
}

export default Myprofile
