const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://athulkp_7:athulkp@cluster0.ivgqajt.mongodb.net/sir?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
}
)
.catch((error)=>{
    console.log(error)
})