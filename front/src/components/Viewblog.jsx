import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Viewblog = () => {
  var[data,setData]=useState([])
  var[update,setUpdate]=useState(false)
  const navigate=useNavigate()


  useEffect(()=>{
    axios.get("http://localhost:3008/api/viewall")
    .then((res)=>{
      setData(res.data)
    }
  )
  },[])
const deletevalue= (id)=>{
  console.log("id is",id)
  axios.delete("http://localhost:3008/api/remove/"+id)
  .then((res)=>{
    alert(res.data.message)
    window.location.reload(true)
  })
}
const updateBlog=(val)=>{
  console.log("update:",val)
  setUpdate(update=true)
  console.log(update)
  navigate('/add',{state:{val,update}})
}
  return (
    <div style={{margin:'8%'}}>
    <Grid container spacing={2}>
     
{data.map((val,i)=>{
  return(
    <Grid item xs={12} sm={4} md={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.post}
        </Typography>
      </CardContent>
      <CardActions>
      <Grid item xs={12} sm={12} md={12}>
        <Button variant='contained' color='primary' onClick={()=>{deletevalue(val._id)}}>delete</Button></Grid>
        <Button variant='contained' color='secondary' onClick={()=>{updateBlog(val)}}>update</Button>
      </CardActions>
    </Card>
    </Grid>

  )
})}
      
    </Grid>
    </div>
  )
}

export default Viewblog

