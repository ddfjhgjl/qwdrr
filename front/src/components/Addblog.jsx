import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Addblog = ({props,update}) => {
  var location=useLocation();
console.log("location:",location.state)

  var [post,setpost]=useState({title:'',post:'',image:''})
  const navigate=useNavigate()
  useEffect(()=>{
if(location.state!=null){
  setpost({...post,title:location.state.val.title,
    post:location.state.val.post,
    image:location.state.val.image})
}else{
  setpost({...post,title:'',post:'',image:''})
}
  },[])
  const inputHandler=(e)=>{
      setpost({...post,[e.target.name]:e.target.value});
      console.log(post)
  }
  const addpost=()=>{
      if (location.state!=null) {
        var upId=location.state.val._id
        console.log(upId)
        axios.put("http://localhost:3008/api/edit/"+upId,post)
        .then((res)=>{
          if(res.data.message="blog updated successfully"){
            alert(res.data.message)
            navigate('/view')
          }else{alert("user not found")}
        })
      }else{console.log("btn ",post)
      axios.post("http://localhost:3008/api/addblog",post)
      .then((res=>{
        alert(res.data.message)
        navigate('/view')
      }))
        
      }
  }
  return (
    <div style={{margin:'8%'}}>
<Typography>Add</Typography>
<br/><br/>
     <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
      <TextField variant='outlined' label='post title' fullWidth value={post.title}  onChange={inputHandler} name='title'/>
      </Grid>
      </Grid> 
      <Grid item xs={12} sm={12} md={12}>
      <TextField variant='outlined' label='type a post' multiline fullWidth rows={8} value={post.post}  onChange={inputHandler} name='post'/>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
      <TextField variant='outlined' label='image url' fullWidth   value={post.image} onChange={inputHandler} name='image'/>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Button variant='contained' color='secondary' onClick={addpost}>submit</Button></Grid>
    </div>
  )
}

export default Addblog
