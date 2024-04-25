const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
PORT=3008;
require('./dbb/connection')

const userRoutes=require('./routes/userRoute')
const postRoutes=require('./routes/postRoute')

const app=express()
app.use(morgan('dev'))
app.use(cors());
app.use('/api',userRoutes)
app.use('/api',postRoutes)


app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`)
})