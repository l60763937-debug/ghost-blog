import express from 'express'
import cors from 'cors'
import connectDB from './lib/db.js'
import webhookRouter from './routes/webhook.route.js'

const app = express()
connectDB()

app.use('/webhook',webhookRouter)
app.use(express.json())
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials: true
}))

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log('server running on ', port)
})