
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
import cloudinary from './config/cloudinary.js';


// App config
const app = express()
const port = process.env.PORT || 5000

// middlewares
app.use(express.json())
app.use(cors())

//connect DB
connectDB()
// api endpoints
app.use('/api/user',userRoute)
app.use('/api/product',productRoute)

// api endpoints
app.get('/', (req, res) => {
    res.send("API Working ......")
})

app.listen(port, () => console.log(`🚀 Server running on PORT ${port}`))