import 'dotenv/config'
import connectDB from "./db/index.js"



connectDB()
.then(()=>(
    app.listen(process.env.PORT || 8000, ()=>(
        console.log(`server is running at ${process.env.PORT || 8000}`)
    ))
))
.catch((error)=>(console.log("MongoDb Connection failed: ",error)))